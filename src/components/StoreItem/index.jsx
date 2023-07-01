import React from 'react';
import style from './../../styles/storeItem.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import ItemControls from 'components/ItemControls';

/**
 * @typedef {Object} StoreItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {Number=} price
 * @prop {String} itemPicture
 */

/**
 * @module
 * @exports StoreItemProps
 */

/** @param {StoreItemProps} props */
export default function StoreItem(props) {
  return (
    <article className="store-item__grid store-item">
      <span className="store-item__title item-title">{props.name}</span>
      <span className="store-item__description">{props.description}</span>
      <span className="store-item__price">{formatPrice(props.price)}</span>
      <Link to={props.id} className="store-item__image">
        <img src={props.itemPicture} width="150px" />
      </Link>
      <div className="store-item__controls">
        <ItemControls {...props} />
      </div>
    </article>
  );
}
