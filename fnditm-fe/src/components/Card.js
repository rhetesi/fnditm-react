// import items from "../dev/db";
import cardPlaceholder from "../pics/placeholder_681_528px.png";
// const itemName = item.name;
// const itemDescription = item.description;

function Card(item) {
  return (
    <>
      <div className="col">
        <div className="card border-secondary h-100">
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