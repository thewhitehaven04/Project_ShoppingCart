/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {Number} price
 * @prop {String} itemPicture
 * @prop {Supply=} supply
 * @prop {String=} description
 */

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemControls from '../ItemControls';
import { Supply } from '../StoreItem/types';
import style from './../../styles/itemExpanded.css';
import { formatPrice } from '../../utils/formatPrice';

export default function StoreItemExpanded() {
  /** @type ItemExpandedData */
  const item = useLoaderData();

  return (
    <section className="item-expanded__grid item-expanded">
      <div className="item-expanded_image">
        <img src={item.itemPicture} alt={'Image of' + item.name} />
      </div>
      <span className="item-expanded_price">{formatPrice(item.price)}</span>
      <span className="item-expanded_name">{item.name}</span>
      <p className="item-expanded_description">{item.description}</p>
      <span className="item-expanded_supply">Item supply: {item.supply}</span>
      <ItemControls {...item} />
    </section>
  );
}
