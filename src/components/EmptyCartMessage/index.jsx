import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EmptyCartMessage() {
  return (
    <>
      <div className="cart__empty cart-icon">
        <FontAwesomeIcon className="cart-icon_element" icon={faCartShopping} />
      </div>
      <span className="cart__empty-text">There are no items in your cart</span>
    </>
  );
}
