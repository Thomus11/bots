
import React from "react";

function Bot({ bot, onAdd, onRemove, onDelete, isArmy }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <button onClick={() => (isArmy ? onRemove(bot) : onAdd(bot))}>
        {isArmy ? "Remove from Army" : "Enlist"}
      </button>
      {!isArmy && <button onClick={() => onDelete(bot)}>Delete</button>}
    </div>
  );
}

export default Bot;