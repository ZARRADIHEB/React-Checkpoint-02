import players from "./players";

function Player() {
  return (
    <div className="player-list d-flex flex-wrap gap-4 justify-content-center">
      {players.map(({ name, team, nationality, jerseyNumber, img }, index) => (
        <div
          className="card text-center"
          style={{ width: "17rem" }}
          key={index}
        >
          <h5 className="card-title py-4 fs-4">
            <b>{name}</b>
          </h5>
          <img
            src={img}
            className="card-img-top"
            alt={name}
            style={{ height: "300px" }}
          />
          <div className="card-body">
            <p className="card-text">
              <b>Team: </b>
              {team} <br />
              <b>Nationality: </b>
              {nationality} <br />
              <b>Jersey Number: </b>
              {jerseyNumber}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Player;
