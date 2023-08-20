import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../providers/Cart";
import { HeaderButton } from "../Header";

export default function HeaderCartStatus() {
  const cartItems = useShoppingCart();

  const totalCount = cartItems.reduce((currentCount, cartItem) => {
    currentCount += cartItem.quantity;
    return currentCount;
  }, 0);

  return (
    <Link to="/cart">
      <HeaderButton type="button">{totalCount} items</HeaderButton>
    </Link>
  );
}
