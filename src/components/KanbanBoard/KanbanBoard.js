import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import GroupSelector from './GroupSelector';
import SortSelector from './SortSelector';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    // Fetch data from the API and set it to the 'tickets' state.
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  // Rest of the KanbanBoard component logic (grouping, sorting, rendering)

  return (
    <div className="kanban-board">
      <GroupSelector
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
      />
      <SortSelector
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <div className="board">
        {/* Render tickets here based on grouping and sorting options */}
        {/* Use the TicketCard component to render each ticket */}
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
