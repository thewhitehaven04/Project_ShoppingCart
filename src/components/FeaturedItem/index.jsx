import style from '@styles/featuredItem.css';
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
      <article className="featured-item__grid">
        <div className="featured-item_image">
          <img src={props.imagePath} />
        </div>
        <div className="featured-item_name">{props.name}</div>
        <div className="featured-item_description">
          {props.promoDescription}
        </div>
      </article>
    </Link>
  );
}
