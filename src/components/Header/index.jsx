import HeaderCartStatus from '@components/HeaderCartStatus';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMatches, Link } from 'react-router-dom';
import style from '@styles/header.css';
import { TextButton } from '@components/TextButton';
import FlexWrapper from '@components/FlexWrapper';
import styled from 'styled-components';

const HeaderNav = styled(FlexWrapper)`
  align-items: center;
  position: sticky;
`;

export default function Header() {
  const inStore = useMatches().find((match) =>
    match.pathname.includes('store'),
  );

  return (
    <header className="header__flex header__sticky">
      <HeaderNav>
        <FontAwesomeIcon icon={faMicrochip} className="header-logo" />
        <Link to="/">
          <TextButton type="button">Home</TextButton>
        </Link>
        {!inStore && (
          <Link to="/store">
            <TextButton type="button">Store</TextButton>
          </Link>
        )}
      </HeaderNav>
      <HeaderCartStatus />
    </header>
  );
}
