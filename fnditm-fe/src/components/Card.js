import cardPlaceholder from "../pics/placeholder_681_528px.png";

export default function Card() {
  return (
    <>
      <div className="card border-secondary">
        <img
          src={cardPlaceholder}
          className="card-img-top cardPlaceholder"
          alt="card"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}