import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './../../styles/store.css';
import StoreItem from 'components/StoreItem';

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
