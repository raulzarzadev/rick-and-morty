import React from "react";
import "../styles/charter-card.css";
function CharterCard({ charter, handleGetCharter }) {
  console.log(charter);
  return (
    <div className="charter" onClick={() => handleGetCharter(charter.id)}>
      <div className="charter_image">
        <img
          className="charter_image--img"
          src={charter.image}
          alt={`charter-${charter.name}`}
        />
      </div>
      <div className="charter_info">
        <div className="charter_info--item">
          <h5 className="item-left">Nombre:</h5>
          <p className="item-rigth"> {charter.name}</p>
        </div>
        <div className="charter_info--item">
          <h5 className="item-left">Origen:</h5>
          <p className="item-rigth"> {charter.origin.name}</p>
        </div>
        <div className="charter_info--item">
          <h5 className="item-left">Especie:</h5>
          <p className="item-rigth"> {charter.species}</p>
        </div>
      </div>
    </div>
  );
}

export default CharterCard;
