import React from 'react';
import style from './../../styles/store.css';
import StoreItem from 'components/StoreItem';

/**
 * @typedef {Object} StoreProps
 * @property {import("./../StoreItem/index.jsx").StoreItemProps[]} items
 */

/**
 * @param {StoreProps} props
 */
export default function Store(props) {
  return (
    <>
      <ul className="store-items__collection">
        {props.items.map((storeItemProps) => (
          <li className="store-items__item" key={storeItemProps.id}>
            <StoreItem {...storeItemProps} />
          </li>
        ))}
      </ul>
    </>
  );
}
