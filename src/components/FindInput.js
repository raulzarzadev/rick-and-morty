import React, { useEffect, useState } from "react";
import "../styles/charter-card.css";
import "../styles/characters.css";
import "../styles/input-search.css";

function FindInput() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("Escribe el nombre de un personaje");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  async function getCharacterByName(name) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = await response.json();
    return data;
  }

  const [charters, setCharters] = useState([]);

  useEffect(() => {
    if (search !== "") {
      getCharacterByName(search)
        .then((res) => {
          if (res?.error) {
            setTitle("¡Ups! No hay nadie llamado así por aquí");
            setCharters([]);
          } else {
            console.log(res);
            setTitle("Selecciona a uno de la lista para ver los detalles");
            setCharters(res.results);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setCharters([]);
      setTitle("Escribe el nombre de tu personaje favorito");
    }
  }, [search]);

  console.log(charters);

  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          onChange={handleChange}
          type="text"
          name="find"
          id="find"
        />
      </div>
      <div className="characters">
        {charters.map((charter) => (
          <div className="characters_item">
            <CharterCard charter={charter} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CharterCard({ charter }) {
  console.log(charter);
  return (
    <div className="charter">
      <div className="charter_image">
        <img
          className="charter_image--img"
          src={charter.image}
          alt={`charter-${charter.name}`}
        />
      </div>
      <div className="charter_info">
        <div className="charter_info--item">
          <div className="item-left">Nombre:</div>
          <div className="item-rigth"> {charter.name}</div>
        </div>
        <div className="charter_info--item">
          <div className="item-left">Origen:</div>
          <div className="item-rigth"> {charter.origin.name}</div>
        </div>
        <div className="charter_info--item">
          <div className="item-left">Especie:</div>
          <div className="item-rigth"> {charter.species}</div>
        </div>
      </div>
    </div>
  );
}

export default FindInput;
