  
import Shop from "./shop.js";
import React, { useState } from "react";

function App() {
  let purchaseItems = [
    {
      id: 1,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item One",
      currency: "₹",
      price: 299,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 2,
    },
    {
      id: 2,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Two",
      currency: "₹",
      price: 199,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4,
    },
    {
      id: 3,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Three",
      currency: "₹",
      price: 99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 3,
    },
    {
      id: 4,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Four",
      currency: "₹",
      price: 999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 1,
    },
    {
      id: 5,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Five",
      currency: "₹",
      price: 599,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 4,
    },
    {
      id: 6,
      imgLink: "http://placehold.it/700x400",
      itemName: "Item Six",
      currency: "₹",
      price: 399,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating: 2,
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [disable, setDisable] = useState([]);

  let addToCart = (obj) => {
    setCart([...cart, obj]);
    setTotal(total + obj.price);
    setDisable([...disable, obj.id])
  };

  let removeCart = (obj) => {
    setCart(cart.filter((item) => item.id !== obj.id));
    setTotal(total - obj.price);
    setDisable(disable.filter((item) => item !== obj.id))
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 className="my-4">Shopping cart</h4>
            <div className="list-group">
              {cart.map((obj) => {
                return (
                  <div className="list-group-item">
                    {obj.itemName}-{obj.currency}
                    {obj.price}
                    <span>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          removeCart(obj);
                        }}
                      >
                        X
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <h4>Total - ₹{total}</h4>
          </div>
          <div className="col-md-9">
            <div className="row">
              {purchaseItems.map((obj) => {
                return <Shop items={obj} handleCart={addToCart}
                disableState={disable}></Shop>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;