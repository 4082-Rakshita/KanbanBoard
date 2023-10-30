import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import './index.css'; // You can import your main CSS file here

ReactDOM.render(
  <React.StrictMode>
    <KanbanBoard />
  </React.StrictMode>,
  document.getElementById('root')
);
