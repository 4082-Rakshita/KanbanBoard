import React from 'react';

function SortSelector({ sortingOption, setSortingOption }) {
  const handleSortingChange = (e) => {
    setSortingOption(e.target.value);
  };

  return (
    <div className="SortSelector">
      <label>Sort by:</label>
      <select value={sortingOption} onChange={handleSortingChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortSelector;
