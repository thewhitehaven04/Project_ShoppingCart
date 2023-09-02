import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * @typedef {Object} FeaturedItemProps
 * @prop {String} id
 * @prop {String} name
 * @prop {String} imagePath
 * @prop {String} promoDescription
 */
/**
 * @module
 * @exports FeaturedItemProps
 */

const FeaturedGrid = styled.article`
  display: grid;
  grid-template-columns: 450px 600px;
  grid-template-areas:
    'description name'
    'description image'
    'description image'
    'description image'
    'description image';

  column-gap: 40px;
  justify-items: center;

  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  padding: 40px;

  &:hover {
    transform: scale(1.02);
  }
`;

const PromoDescription = styled.div`
  font-size: 16pt;
  grid-area: description;
`;

const PromoName = styled.div`
  font-size: 36pt;
`;

/**
 * @param {FeaturedItemProps} props
 */
export default function FeaturedItem(props) {
  return (
    <Link to={`/store/${props.id}`}>
      <FeaturedGrid>
        <img style={{ gridArea: 'image' }} width="300" src={props.imagePath} />
        <PromoName>{props.name}</PromoName>
        <PromoDescription>{props.promoDescription}</PromoDescription>
      </FeaturedGrid>
    </Link>
  );
}
