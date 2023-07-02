import {
  faCartShopping,
  faHouse,
  faShop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const routeToCrumbMap = new Map()
  .set(
    '/home',
    <>
      <FontAwesomeIcon icon={faHouse} />
      <span className="crumb_text">Home</span>
    </>,
  )
  .set(
    '/store',
    <>
      <FontAwesomeIcon icon={faShop} />
      <span className="crumb_text">Store</span>
    </>,
  )
  .set(
    '/cart',
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="crumb_text">Cart</span>
    </>,
  );
