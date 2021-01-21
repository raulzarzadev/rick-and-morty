import React, { useEffect, useState } from "react";
import "../styles/charter-card.css";
import "../styles/characters.css";
import "../styles/input-search.css";
import "../styles/charter-details.css";
import Loading from "./Loading";
import CharterCard from "./CharterCard";
import CharterDetails from "./CharterDetails";
import SearchInput from "./SearchInput";

function CharterDisplay() {
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
      <SearchInput
        name="find"
        placeholder="Personaje"
        value={search}
        handleChange={handleChange}
        handleCleanSearch={handleCleanSearch}
      />

      {charterDetails ? (
        <CharterDetails charter={charterDetails} />
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

export default CharterDisplay;
