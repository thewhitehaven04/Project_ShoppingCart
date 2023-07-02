import { useShoppingCart, useShoppingCartDispatch } from 'providers/Cart';
import React from 'react';
import { Link } from 'react-router-dom';
import { cartActionTypes } from 'reducers/cartReducer';
import style from './../../styles/itemControls.css';

/**
 * @param {import("components/StoreItem").StoreItemProps} props
 */
export default function ItemControls(props) {
  const dispatch = useShoppingCartDispatch();
  const cartItems = useShoppingCart();

  const isItemInCart = cartItems.find((cartItem) => cartItem.id === props.id);

  const handlePurchase = () => {
    if (!isItemInCart) {
      dispatch({
        type: cartActionTypes.addToCart,
        data: props,
      });
    }
  };

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
    <div className="controls__flex">
      {isItemInCart ? (
        <button type="button" className="" onClick={handleRemoveFromCart}>
          Remove from cart
        </button>
      ) : (
        <button type="button" className="" onClick={handleAddToCart}>
          Add to cart
        </button>
      )}
      <button>
        <Link onClick={handlePurchase} to="/cart">
          Purchase
        </Link>
      </button>
    </div>
  );
}
