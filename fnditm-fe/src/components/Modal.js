import cardPlaceholder from "../pics/placeholder_681_528px.png";

function Modal({ item }) {
  return (
    <>
      {/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">

            <div class="modal-body">
              <div class="card shadow mb-3 h-100" style="max-width: 1024px;" id={item.id}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://picsum.photos/3200" class="img-fluid rounded-start" alt="iphone"></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text">${item.description}</p>
                      <p class="card-text">Találta: ${item.author}</p>
                      {/* <p class="card-text"><small class="text-body-secondary">${modalTime}</small></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </>
  )
}