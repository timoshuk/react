import React from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import "./cart-item.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShopingIcon className="shopping-icon" />
    <span className="icon-count">0</span>
  </div>
);

export default CartIcon;
