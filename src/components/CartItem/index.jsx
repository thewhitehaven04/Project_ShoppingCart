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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

/** @param {CartItemProps} props */
export default function CartItem(props) {
  const dispatch = useShoppingCartDispatch();

  const removeFromCart = () =>
    dispatch({ type: cartActionTypes.removeFromCart, data: { id: props.id } });

  const handleQuantityChange = (event) => {
    dispatch({
      type: cartActionTypes.addToCart,
      data: { ...props, quantity: Number.parseInt(event.target.value, 10) },
    });
  };

  return (
    <div className="cart-item__grid">
      <Link to={'/store/' + props.id} className="cart-item__image">
        <img src={props.itemPicture} width="150px" />
      </Link>
      <span className="cart-item__title">{props.name}</span>
      <span className="cart-item__price">{formatPrice(props.price)}</span>
      <label className="cart-item__quantity">
        Quantity:
        <input
          id="quantity"
          type="number"
          min={1}
          onChange={handleQuantityChange}
          value={props.quantity}
        />
      </label>
      <div className="cart-item__controls">
        <button className="cart-item-controls__remove" onClick={removeFromCart}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}
