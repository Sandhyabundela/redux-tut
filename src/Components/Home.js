import React from "react";
import web from "../img/mobile.jpg";
import web2 from "../img/card1.png";
const Home = () => {
  return (
    <div>
      <div>
        <img src={web2} className="add-to-cart img" />
      </div>
      <h1 className="title">Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={web} className="img-fluid animated" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: 60,00.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
          // onClick={() => {
          //   props.addToCartHandler({ pice: 1000, name: "i phone 11" });
          // }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
