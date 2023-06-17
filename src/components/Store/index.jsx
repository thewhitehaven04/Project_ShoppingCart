import React from 'react';
import StoreItem from '../StoreItem';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/store.css';

/**
 * @typedef {Object} StoreProps
 * @prop {StoreItemProps[]} props
 */

/**
 * @param {StoreProps} props
 */
export default function Store(props) {
  return (
    <ul className="store-items__collection">
      {props.items.map((storeItemProps) => (
        <li className="store-items__item" key={storeItemProps.name}>
          <StoreItem {...storeItemProps} />
        </li>
      ))}
    </ul>
  );
}
