import Star from "./star.js";

export default function Shop(props) {
  let isDisabled = props.disableState.includes(props.items.id);
  let rating = props.items.rating;
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4 my-5">
        <div className="card h-100">
          <a href="public\index.html">
            <img className="card-img-top" src={props.items.imgLink} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="public\index.html"> {props.items.itemName} </a>
            </h4>
            <h5>
              {props.items.currency} {props.items.price}
            </h5>
            <p className="card-text"> {props.items.description} </p>
          </div>
          <div className="card-footer">
            <Star ratingStar={rating}></Star>
            <span>
              <button
                className="btn btn-primary"
                id="cartbtn"
                disabled={isDisabled}
                onClick={() => {
                  props.handleCart(props.items);
                }}
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}