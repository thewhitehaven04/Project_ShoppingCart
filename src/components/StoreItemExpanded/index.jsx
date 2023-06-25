/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {String=} price
 * @prop {String[]=} itemPicture
 */

import useItem from 'hooks/useItem';
import React  from 'react';
import { useParams } from 'react-router-dom';

export default function StoreItemExpanded() {
  const { id } = useParams();
  const item = useItem(id).get();

  // Placeholder
  return (
    <>
      <span>{item.name}</span>
      <span>{item.description}</span>
      <span>{item.price}</span>
    </>
  );
}
