import React from 'react';
import Store from '../../components/Store';
import ps5 from './../../resources/images/sony-playstation-ps5-konzola-2.png';
import xsx from './../../resources/images/25647-xbox-series-x-1tb-konzola-cena-prodaja-2.jpg';
import ip14 from './../../resources/images/iphone14pro.png';

/**
 * @type {StoreItemProps[]}
 */
const StoreItems = [
  {
    id: crypto.randomUUID(),
    name: 'Xbox Series X',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, commodi, tempora corrupti harum cum dolore magnam quae, repudiandae deserunt voluptas exercitationem praesentium adipisci ex! Esse voluptatibus perferendis accusantium unde eligendi!',
    itemPicture: xsx,
    price: 499.99,
  },
  {
    id: crypto.randomUUID(),
    name: 'PlayStation 5',
    description:
      'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.',
    itemPicture: ps5,
    price: 499.99,
  },
  {
    id: crypto.randomUUID(),
    name: 'IPhone 14 Pro',
    description:
      'The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the sixteenth-generation flagship iPhones, succeeding the iPhone 13 Pro and iPhone 13 Pro Max. The devices were unveiled alongside the iPhone 14 and iPhone 14 Plus during the Apple Event at Apple Park in Cupertino, California, on September 7, 2022',
    itemPicture: ip14,
    price: 999.99,
  },
];

export default function StorePage() {
  return (
    <main className="store-main">
      <Store items={StoreItems} />
    </main>
  );
}
