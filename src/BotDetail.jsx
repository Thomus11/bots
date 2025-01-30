
import React from "react";
import { useParams } from "react-router-dom";

function BotDetail({ bots }) {
  const { id } = useParams();
  const bot = bots.find((bot) => bot.id === parseInt(id));

  if (!bot) return <p>Bot not found!</p>;

  return (
    <div className="bot-detail">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
    </div>
  );
}

export default BotDetail;