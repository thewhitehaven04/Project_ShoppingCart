/**
 * @typedef ItemExpandedData
 * @prop {String} id
 * @prop {String} name
 * @prop {Number} price
 * @prop {String} itemPicture
 * @prop {Supply=} supply
 * @prop {String=} description
 */

import { useLoaderData } from 'react-router-dom';
import ItemControls from '../ItemControls';
import { Supply } from '../StoreItem/types';
import style from './../../styles/itemExpanded.css';
import { formatPrice } from '../../utils/formatPrice';
import styled from 'styled-components';

const StoreItemDescription = styled.span`
  grid-area: description;
  text-align: justify;
  margin: 0;
`;

const StoreItemCapitalText = styled.span`
  font-size: 16pt;
`;

function StoreItemExpanded(props) {
  /** @type ItemExpandedData */
  const item = useLoaderData();

  return (
    <section {...props}>
      <div style={{ gridArea: 'image' }}>
        <img
          style={{ width: '100%' }}
          src={item.itemPicture}
          alt={'Image of ' + item.name}
        />
      </div>
      <StoreItemCapitalText style={{ gridArea: 'price' }}>
        {formatPrice(item.price)}
      </StoreItemCapitalText>
      <StoreItemCapitalText style={{ gridArea: 'name' }}>
        {item.name}
      </StoreItemCapitalText>
      <StoreItemDescription>{item.description}</StoreItemDescription>
      <span style={{ gridArea: 'supply' }}>Item supply: {item.supply}</span>
      <ItemControls {...item} />
    </section>
  );
}

export default styled(StoreItemExpanded)`
  display: grid;
  grid-template-columns: 300px 1fr 200px;
  grid-template-rows: 50px;
  grid-template-areas:
    'image name price'
    'image description controls'
    'image description controls'
    'image supply .';

  column-gap: 20px;
`;
