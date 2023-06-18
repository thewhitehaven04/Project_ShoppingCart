import CartItem from 'components/CartItem';
import { ShoppingCartContext } from 'context/cartContext';
import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/cart.css';

export default function Cart() {
  const cartItems = useContext(ShoppingCartContext);

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
