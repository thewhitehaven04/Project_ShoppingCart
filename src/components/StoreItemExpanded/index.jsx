/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {String=} price
 * @prop {String[]=} itemPicture
 */

import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function StoreItemExpanded() {
  const { id } = useParams();
  const item = useOutletContext().find(
    (item) => item.id === id,
  );

  // Placeholder
  return (
    <>
      <span>{item.name}</span>
      <span>{item.description}</span>
      <span>{item.price}</span>
    </>
  );
}
