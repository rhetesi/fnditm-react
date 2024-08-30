import cardPlaceholder from "../pics/placeholder_681_528px.png";

function Modal({item}) {
    <>
      {/* <!-- Modal --> */}
  

  {/* <!-- A Modal --> */}
  <div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">

        {/* <!-- Modal fejléce --> */}
        <div class="modal-header">
          <h4 class="modal-title">Kiválasztott tárgy részletei</h4>
        </div>

        {/* <!-- Modal tartalma --> */}
        <div class="modal-body">
          {/* <div class="getback__check">
            <h5 class="getback__check--title">Kiadási pénztárbizonylat</h5>
            <div class="getback__pay">
              <div class="getback__pay--header"><small>Pénztár fizessen az alábbiak szerint</small></div>
              <div class="customernamediv"><small>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                  . . . . . . . . . . . . . . . . . . . -nak</small></div>
              <div class="getback__pay--amount mt-2"></div>
            </div>
          </div>
          <div class="getback__deposit mt-3"></div> */}
          <div className="selected-item">
            <h5 className="item__name">{item.name}</h5>
            <div className="ite,_details">
                <div></div>
            </div>
          </div>
        </div>

        {/* <!-- Modal lábléce --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-warning text-white" data-bs-dismiss="modal">Bezár</button>
        </div>

      </div>
    </div>
  </div>
    </>
}