import React, { useEffect, useState } from "react";
import "../styles/charter-card.css";
import "../styles/characters.css";
import "../styles/input-search.css";
import "../styles/charter-details.css";
import Loading from "./Loading";

function FindInput() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Personajes de Rick & Morty");

  const handleChange = (e) => {
    setCharterDetails(null);
    setLoading(true);
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
      setLoading(false);

      setCharters([]);
      setTitle("Personajes de Rick & Morty");
    } else {
      getCharacterByName(search)
        .then((res) => {
          if (res?.error) {
            setLoading(false);
            setTitle("¡Ups! No hay nadie llamado así por aquí");
            setCharters([]);
          } else {
            setLoading(false);
            console.log(res);
            setTitle("Selecciona a uno de la lista para ver los detalles");
            setCharters(res.results);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [search]);


  return (
    <div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Personaje"
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
            Buscar
          </div>
          <CharterDetails charter={charterDetails} />
        </div>
      ) : (
        <>
          {loading ? (
            <Loading />
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
        </>
      )}
    </div>
  );
}

function CharterDetails({ charter }) {
  let episodes = charter.episode.map((episodio) => {
    const episodioNo = episodio.split("/");
    return episodioNo[episodioNo.length - 1];
  });

  if (episodes.length > 1) {
    episodes = episodes.join(", ");
  }
  if (episodes.length > 50) {
    episodes = episodes.slice(0, 50).concat(" ...");
  }
  console.log(episodes);

  const details = [
    { title: "Nombre", value: charter?.name },
    { title: "Genero", value: charter?.gender },
    { title: "Origen", value: charter?.origin?.name },
    { title: "Especie", value: charter?.species },
    { title: "Status", value: charter?.status },
    { title: "Ubicacion", value: charter?.location?.name },
    { title: "Episodios", value: episodes },
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
            <h4 className="card_detail--side-title">
              <em>{detail.title}:</em>
            </h4>
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

export default FindInput;
