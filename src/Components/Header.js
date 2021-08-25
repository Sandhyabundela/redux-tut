import React from "react";
import web2 from "../img/card1.png";
function Header(props) {
  console.warn(props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src={web2} className="add-to-cart img" />
      </div>
    </div>
  );
}

export default Header;
