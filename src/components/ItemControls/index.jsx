import React from 'react';
import { Link } from 'react-router-dom';
import style from '@styles/itemControls.css';
import { cartActionTypes } from '@reducers/cartReducer';
import { useShoppingCartDispatch, useShoppingCart } from '@providers/Cart';

/**
 * @param {import('@components/StoreItem').StoreItemProps} props
 */
export default function ItemControls(props) {
  const dispatch = useShoppingCartDispatch();
  const cartItems = useShoppingCart();

  const isItemInCart = cartItems.find((cartItem) => cartItem.id === props.id);

  const handlePurchase = () => {
    if (!isItemInCart) {
      dispatch({
        type: cartActionTypes.addToCart,
        data: { ...props, quantity: 1 },
      });
    }
  };

  const handleAddToCart = () =>
    dispatch({
      type: cartActionTypes.addToCart,
      data: { ...props, quantity: 1 },
    });

  const handleRemoveFromCart = () =>
    dispatch({
      type: cartActionTypes.removeFromCart,
      data: { ...props, quantity: 1 },
    });

  return (
    <div className="controls__flex">
      {isItemInCart ? (
        <button
          type="button"
          className="controls-button controls-button__added_to_cart"
          onClick={handleRemoveFromCart}
        >
          Remove from cart
        </button>
      ) : (
        <button
          type="button"
          className="controls-button"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
      <Link onClick={handlePurchase} to="/cart">
        <button className="controls-button" type="button">
          Purchase
        </button>
      </Link>
    </div>
  );
}
