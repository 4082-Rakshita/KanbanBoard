import React from 'react';

function GroupSelector({ groupingOption, setGroupingOption }) {
  const handleGroupingChange = (e) => {
    setGroupingOption(e.target.value);
  };

  return (
    <div className="GroupSelector">
      <label>Group by:</label>
      <select value={groupingOption} onChange={handleGroupingChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupSelector;
