import React from 'react';
import style from './../../styles/StoreItem';
import img from './';
import PropTypes from 'prop-types';

export default function StoreItem(props) {

  const handlePurchase = () => {

  }

  const handleAddToCart = () => {

  }

  return (
    <article className="store-item__grid store-item">
      <span className="store-item__title">{props.name}</span>
      <span className="store-item__description">{props.description}</span>
      <img className="store-item__image" src={props.itemPicture}></img>
      <div className="store-item__controls">
        <button type="button" onClick={handleAddToCart}>Add to cart</button>
        <button type="button" onClick={handlePurchase}>Purchase</button>
      </div>
    </article>
  );
}

StoreItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  itemPicture: HTMLImageElement,
};
