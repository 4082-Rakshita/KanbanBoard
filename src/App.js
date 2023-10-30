import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import GroupSelector from './components/GroupSelector';
import SortSelector from './components/SortSelector';
import { fetchTickets } from './api'; // You need to implement this function

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    // Fetch data from the API and set it to the 'tickets' state.
    fetchTickets().then((data) => setTickets(data));
  }, []);

  // Handle grouping and sorting changes here

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <GroupSelector
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
      />
      <SortSelector
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortingOption={sortingOption} />
    </div>
  );
}

export default App;
