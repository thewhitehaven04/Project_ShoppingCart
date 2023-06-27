/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {String=} description
 * @prop {String=} price
 * @prop {String[]=} itemPicture
 */

import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function StoreItemExpanded() {
  const item = useLoaderData();
  // Placeholder
  return (
    <>
      <span>{item.name}</span>
      <span>{item.description}</span>
      <span>{item.price}</span>
    </>
  );
}
