
import React from "react";
import Bot from "./Bot";

function BotArmy({ bots, removeFromArmy }) {
  return (
    <div className="bot-army">
      <h2>Your Army</h2>
      {bots.length === 0 ? <p>No bots in your army yet.</p> : null}
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onRemove={removeFromArmy} isArmy />
      ))}
    </div>
  );
}

export default BotArmy;