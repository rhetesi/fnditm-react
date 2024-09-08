import cardPlaceholder from "../pics/placeholder_681_528px.png";

function Card({item, index}) { // Itt kell átvenni a szülő komponensből érkező adatokat {} között
  return (
    <>
      <div className="col">
        <div key={index} className="card shadow border-secondary h-100" id={item.id}>
          <img
            src={cardPlaceholder}
            className="card-img-top cardPlaceholder"
            alt="card"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card