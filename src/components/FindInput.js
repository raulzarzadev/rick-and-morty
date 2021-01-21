import React, { useEffect, useState } from "react";
import "../styles/charter-card.css";
import "../styles/characters.css";
import "../styles/input-search.css";
import "../styles/charter-details.css";

function FindInput() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("Escribe el nombre de un personaje");

  const handleChange = (e) => {
    setCharterDetails(null);
    setSearch(e.target.value);
  };

  async function getCharacterByName(name) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const data = await response.json();
    return data;
  }

  const [charterDetails, setCharterDetails] = useState(null);

  const handleGetCharter = async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    console.log(data);
    setCharterDetails(data);
    setCharters([]);
    return data;
  };

  const handleCleanSearch = () => {
    console.log("reset");
    setCharterDetails(null);
    setSearch("");
  };

  const [charters, setCharters] = useState([]);

  useEffect(() => {
    if (search === "") {
      setCharters([]);
      setTitle("Escribe el nombre de tu personaje favorito");
    } else {
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
    }
  }, [search]);

  console.log(charters);

  return (
    <div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          onChange={handleChange}
          value={search}
          type="text"
          name="find"
          id="find"
        />
      </div>
      {charterDetails ? (
        <div>
          <div onClick={handleCleanSearch} className="btn-clean">
            limpiar busqueda
          </div>
          <CharterDetails charter={charterDetails} />
        </div>
      ) : (
        <div className="characters">
          {charters.map((charter) => (
            <div className="characters_item">
              <CharterCard
                charter={charter}
                handleGetCharter={handleGetCharter}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CharterDetails({ charter }) {
  console.log(charter);
  console.log(CharterDetails);
  const details = [
    { title: "Nombre", value: charter?.name },
    { title: "Genero", value: charter?.gender },
    { title: "Origen", value: charter?.origin?.name },
    { title: "Especie", value: charter?.species },
    { title: "Status", value: charter?.status },
    { title: "Ubicacion", value: charter?.location?.name },
    { title: "Episodios ", value: charter?.episode?.length },
  ];
  return (
    <div className="card_details">
      <img
        className="card_details--image"
        src={charter.image}
        alt={`charter-details-${charter.image}`}
      />
      <div className="card_details--info">
        {details.map((detail) => (
          <div className="card_detail">
            <div className="card_detail--side-title">{detail.title}: </div>
            <div className="card_detail--side-value">{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
