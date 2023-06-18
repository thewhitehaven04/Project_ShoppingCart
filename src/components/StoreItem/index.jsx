import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/storeItem.css';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from '../../context/cartContext';
import { cartActionTypes } from '../../reducers/cartReducer';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';

/**
 * @typedef {Object} StoreItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {String=} price
 * @prop {String=} itemPicture
 */

/**
 * @module
 * @exports StoreItemProps
 */

/**
 * @param {StoreItemProps} props
 */
export default function StoreItem(props) {
  const dispatch = useContext(ShoppingCartDispatchContext);
  const cartItems = useContext(ShoppingCartContext);

  const isItemInCart = () => cartItems.find((cartItem) => cartItem.id === props.id);

  const handlePurchase = () =>
    dispatch({
      type: cartActionTypes.addToCart,
      data: props,
    });

  const handleAddToCart = () =>
    dispatch({
      type: cartActionTypes.addToCart,
      data: props,
    });

  const handleRemoveFromCart = () =>
    dispatch({
      type: cartActionTypes.removeFromCart,
      data: props,
    });

  return (
    <article className="store-item__grid store-item">
      <span className="store-item__title item-title">{props.name}</span>
      <span className="store-item__description">{props.description}</span>
      <span className="store-item__price">{formatPrice(props.price)}</span>
      <img
        className="store-item__image"
        src={props.itemPicture}
        width="150px"
      ></img>
      <div className="store-item__controls controls__flex">
        {isItemInCart() ? (
          <button type="button" onClick={handleRemoveFromCart}>
            Remove from cart
          </button>
        ) : (
          <button type="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
        <button>
          <Link onClick={handlePurchase} to="/cart">
            Purchase
          </Link>
        </button>
      </div>
    </article>
  );
}
