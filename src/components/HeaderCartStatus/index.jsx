import { ShoppingCartContext } from 'context/cartContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function HeaderCartStatus() {
  const cartItems = useContext(ShoppingCartContext);

  return (
    <button type="button">
      <Link to="/cart">{cartItems ? cartItems.length : 0} items</Link>
    </button>
  );
}
