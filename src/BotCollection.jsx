
import React from "react";
import Bot from "./Bot";

function BotCollection({ bots, addToArmy, deleteBot }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAdd={addToArmy} onDelete={deleteBot} />
      ))}
    </div>
  );
}

export default BotCollection;