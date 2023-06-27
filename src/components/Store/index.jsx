import React from 'react';
import style from './../../styles/store.css';
import StoreItem from 'components/StoreItem';
import localStorageWrapper from 'service/localStorage';

/**
 * @typedef {Object} StoreProps
 * @property {import("./../StoreItem/index.jsx").StoreItemProps[]} items
 */

export default function Store() {
  const items = localStorageWrapper('items').getAll();

  return (
    <>
      <ul className="store-items__collection">
        {items.map((storeItemProps) => (
          <li className="store-items__item" key={storeItemProps.id}>
            <StoreItem {...storeItemProps} />
          </li>
        ))}
      </ul>
    </>
  );
}
