
import React from "react";

function FilterBar({ onFilter }) {
  const classes = ["All", "Support", "Medic", "Assault", "Defender", "Captain", "Witch"];
  return (
    <div>
      {classes.map((botClass) => (
        <button key={botClass} onClick={() => onFilter(botClass)}>
          {botClass}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;