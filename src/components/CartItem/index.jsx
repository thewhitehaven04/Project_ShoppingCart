/**
 * @typedef {Object} CartItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String} itemPicture
 * @prop {Number} price
 * @prop {Number} quantity
 */

import { useShoppingCartDispatch } from 'providers/Cart';
import { cartActionTypes } from 'reducers/cartReducer';
import style from './../../styles/cartItem.css';
import React from 'react';
import { formatPrice } from 'utils/formatPrice';
import { Link } from 'react-router-dom';

/** @param {CartItemProps} props */
export default function CartItem(props) {
  const dispatch = useShoppingCartDispatch();

  const removeFromCart = () =>
    dispatch({ type: cartActionTypes.removeFromCart, data: { id: props.id } });

  const handleQuantityChange = (event) => {
    dispatch({
      type: cartActionTypes.addToCart,
      data: { ...props, quantity: event.target.value },
    });
  };

  return (
    <div className="cart-item__grid">
      <Link to={'/store/' + props.id}>
        <img
          className="cart-item__image"
          src={props.itemPicture}
          width="150px"
        />
      </Link>
      <span className="cart-item__title">{props.name}</span>
      <span className="cart-item__price">{formatPrice(props.price)}</span>
      <input
        name="quantity"
        type="number"
        min={1}
        onChange={handleQuantityChange}
        value={props.quantity}
      />
      <div className="cart-item__controls">
        <button onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  );
}
