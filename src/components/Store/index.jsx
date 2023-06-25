import React from 'react';
import style from './../../styles/store.css';
import StoreItem from 'components/StoreItem';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import StoreItemExpanded from 'components/StoreItemExpanded';

/**
 * @typedef {Object} StoreProps
 * @property {import("./../StoreItem/index.jsx").StoreItemProps[]} items
 */

export default function Store() {
  const items = useOutletContext();

  return (
    <>
      <ul className="store-items__collection">
        {items.map((storeItemProps) => (
          <li className="store-items__item" key={storeItemProps.id}>
            <Link to={storeItemProps.id}>
              <StoreItem {...storeItemProps} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
