import React from 'react';
import Store from '../../components/Store';
import ps5 from './../../resources/images/sony-playstation-ps5-konzola-2.png';
import xsx from './../../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';

/**
 * @type {StoreItemProps[]}
 */
const StoreItems = [
  {
    name: 'Xbox Series X',
    description: 'kek',
    itemPicture: xsx,
    price: 500,
    isAddedToCart: false,
  },
  {
    name: 'PlayStation 5',
    description: 'ps5',
    itemPicture: ps5,
    price: 500,
    isAddedToCart: false,
  },
];

export default function StorePage() {
  return (
    <main className="store-main">
      <Store items={StoreItems}></Store>
    </main>
  );
}
