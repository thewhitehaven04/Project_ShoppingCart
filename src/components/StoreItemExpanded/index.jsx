/**
 * @typedef ItemExpandedProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {String=} price
 * @prop {String[]=} itemPicture
 */

import React from 'react';

/**
 * @param {ItemExpandedProps} props
 */
export default function StoreItemExpanded(props) {
  const { name, description, price } = props;

  // Placeholder
  return (
    <>
      <span>{name}</span>
      <span>{description}</span>
      <span>{price}</span>
    </>
  );
}
