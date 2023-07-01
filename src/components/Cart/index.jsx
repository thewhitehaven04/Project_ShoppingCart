import CartItem from 'components/CartItem';
import { useShoppingCart } from 'providers/Cart';
import React from 'react';
import style from './../../styles/cart.css';
import { formatPrice } from 'utils/formatPrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  const cartItems = useShoppingCart();

  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

  return cartItems.length === 0 ? (
    <>
      <div className="cart__empty cart-icon">
        <FontAwesomeIcon className="cart-icon_element" icon={faCartShopping} />
      </div>
      <span className='cart__empty-text'>There are no items in your cart</span>
    </>
  ) : (
    <>
      <ul className="cart-items__collection">
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            <CartItem {...cartItem} />
          </li>
        ))}
      </ul>
      <div className="cart-items__total">
        <span>Item quantity: {cartItems.length}</span>
        <span>Total: {formatPrice(totalSum)}</span>
      </div>
    </>
  );
}
