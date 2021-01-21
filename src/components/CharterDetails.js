import React from "react";

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

export default CharterDetails;
