import style from '@styles/store.css';
import StoreItem from '@components/StoreItem/index.jsx';
import { CardWrapper } from '@components/CardWrapper';

/**
 * @typedef {Object} StoreProps
 * @property {import('@components/StoreItem/index.jsx').StoreItemProps[]} items
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
            <CardWrapper>
              <StoreItem {...storeItemProps} />
            </CardWrapper>
          </li>
        ))}
      </ul>
    </>
  );
}
