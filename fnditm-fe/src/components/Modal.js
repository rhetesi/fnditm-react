import cardPlaceholder from "../pics/placeholder_681_528px.png";

function Modal({item}) {
  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">

            {/* Modal fejléce */}
            <div className="modal-header">
              <h4 className="modal-title">Talált tárgy részletei</h4>
            </div>

            {/* Modal tartalma */}
            <div className="modal-body">
                <div key={index} className="card border-secondary h-100" id={item.id}>
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

            {/* Modal lábléce */}
            <div className="modal-footer">
              <button type="button" className="btn-btn-warning text-white" data-bs-dismiss="modal">Bezár</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}