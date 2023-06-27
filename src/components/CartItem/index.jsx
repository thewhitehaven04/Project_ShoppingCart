/**
 * @typedef {Object} CartItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String} itemPicture
 * @prop {Number} price
 */

import { useShoppingCartDispatch } from 'providers/Cart';
import { cartActionTypes } from 'reducers/cartReducer';
import style from './../../styles/cartItem.css';
import React from 'react';
import { formatPrice } from 'utils/formatPrice';

/** @param {CartItemProps} props */
export default function CartItem(props) {
  const dispatch = useShoppingCartDispatch();

  const removeFromCart = () =>
    dispatch({ type: cartActionTypes.removeFromCart, data: { id: props.id } });

  return (
    <div className="cart-item__grid">
      <img className="cart-item__image" src={props.itemPicture} width="150px" />
      <span className="cart-item__title">{props.name}</span>
      <span className="cart-item__price">{formatPrice(props.price)}</span>
      <div className="cart-item__controls">
        <button onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
}
