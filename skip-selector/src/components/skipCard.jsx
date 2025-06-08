import React from "react";
import "./SkipCard.css";

const SkipCard = ({ skip, selected, onSelect }) => {
  const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  return (
    <div className={`card ${selected ? "selected" : ""}`}>
      <div className="image-placeholder">Skip Image</div>
      <div className="yard-label">{skip.size} Yards</div>
      <h2>{skip.size} Yard Skip</h2>
      <p>{skip.hire_period_days}-day hire</p>
      <strong>£{totalPrice.toFixed(2)}</strong>
      <ul className="details">
        <li>Allowed on road: {skip.allowed_on_road ? "✅" : "❌"}</li>
        <li>Heavy waste: {skip.allows_heavy_waste ? "✅" : "❌"}</li>
      </ul>
      <button onClick={onSelect}>
        {selected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
};

export default SkipCard;
