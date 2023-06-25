import CartItem from 'components/CartItem';
import { useShoppingCart } from 'providers/Cart';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/cart.css';

export default function Cart() {
  const cartItems = useShoppingCart();

  return (
    <ul className="cart-items__collection">
      {cartItems.map((cartItem) => (
        <li key={cartItem.prop}>
          <CartItem {...cartItem} />
        </li>
      ))}
    </ul>
  );
}
