import "bootstrap/dist/css/bootstrap.min.css";


const Popup = () => {


  return (<>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <span className="price" >add </span>
      <span className="shopping-cart"> <i class="fa fa-heart"></i></span>
      <span className="buy">fav </span>
    </button>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">favorites list</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to add this movie to your favorites list?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">add</button>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Popup;