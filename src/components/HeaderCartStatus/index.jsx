import { HeaderButton } from 'components/Header';
import { useShoppingCart } from 'providers/Cart';
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderCartStatus() {
  const cartItems = useShoppingCart();

  return (
    <HeaderButton type="button">
      <Link to="/cart">{cartItems ? cartItems.length : 0} items</Link>
    </HeaderButton>
  );
}
