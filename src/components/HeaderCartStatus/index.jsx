import { useShoppingCart } from 'providers/Cart';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderCartStatus() {
  const cartItems = useShoppingCart();

  return (
    <button type="button">
      <Link to="/cart">{cartItems ? cartItems.length : 0} items</Link>
    </button>
  );
}
