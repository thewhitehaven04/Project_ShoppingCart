/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {Number} price
 * @prop {String} itemPicture
 * @prop {Supply=} supply
 * @prop {String=} description
 */

import ItemControls from 'components/ItemControls';
import { Supply } from 'components/StoreItem/types';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import style from './../../styles/itemExpanded.css';

export default function StoreItemExpanded() {
  /** @type ItemExpandedData */
  const item = useLoaderData();

  return (
    <section className="item-expanded__grid item-expanded">
      <div className="item-expanded_image">
        <img src={item.itemPicture} alt={'Image of' + item.name} />
      </div>
      <span className="item-expanded_name">{item.name}</span>
      <p className="item-expanded_description">{item.description}</p>
      <span className="item-expanded_supply">
        Item availability: {item.supply}
      </span>
      <ItemControls {...item} />
    </section>
  );
}
