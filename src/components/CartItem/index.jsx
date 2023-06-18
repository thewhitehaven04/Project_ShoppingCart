/**
 * @typedef {Object} CartItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String} itemPicture
 * @prop {String} price
 */

import { ShoppingCartDispatchContext } from 'context/cartContext';
import { useContext } from 'react';
import { cartActionTypes } from 'reducers/cartReducer';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/cartItem.css';
import React from 'react';

/** @param {CartItemProps} props */
export default function CartItem(props) {
  const dispatch = useContext(ShoppingCartDispatchContext);

  const removeFromCart = () =>
    dispatch({ type: cartActionTypes.removeFromCart, data: { id: props.id } });

  return (
    <div className="cart-item__grid">
      <img className="cart-item__image" src={props.itemPicture} width="150px" />
      <span className="cart-item__title">{props.name}</span>
      <span className="cart-item__price">{props.price}</span>
      <div className="cart-item__controls">
        <button onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
}
