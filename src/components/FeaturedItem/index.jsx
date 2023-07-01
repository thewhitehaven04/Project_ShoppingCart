import React from 'react';
import style from './../../styles/featuredItem.css';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} FeaturedItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String} imagePath
 * @prop {String} promoDescription
 */
/**
 * @module
 * @exports FeaturedItemProps
 */

/**
 * @param {FeaturedItemProps} props
 */
export default function FeaturedItem(props) {
  return (
    <Link to={`/store/${props.id}`}>
      <article className="featured-item__flex featured-item">
        <img
          src={props.imagePath}
          alt={props.name}
          className="featured-item_image"
        />
        <div className="featured-item_text">
          <div className="featured-item_text__name">{props.name}</div>
          <div className="featured-item_text__description">
            {props.promoDescription}
          </div>
        </div>
      </article>
    </Link>
  );
}
