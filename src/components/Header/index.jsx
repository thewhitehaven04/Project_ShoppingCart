import React from 'react';
import style from './../../styles/header.css';
import { Outlet, Link, useMatches } from 'react-router-dom';
import HeaderCartStatus from 'components/HeaderCartStatus';
import Breadcrumbs from 'components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

/**
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} props
 */
export function HeaderButton({ children }, props) {
  return (
    <button
      {...props}
      className={'header-button' + (props.className ? props.className : '')}
    >
      {children}
    </button>
  );
}

export default function AppHeader() {
  const inStore = useMatches().find((match) =>
    match.pathname.includes('store'),
  );

  return (
    <>
      <header className="header__flex header__sticky">
        <nav className="header_navigation">
          <FontAwesomeIcon icon={faMicrochip} className="header-logo" />
          <HeaderButton type="button">
            <Link to="/">Home</Link>
          </HeaderButton>
          {!inStore && (
            <HeaderButton type="button">
              <Link to="/store">Store</Link>
            </HeaderButton>
          )}
        </nav>
        <HeaderCartStatus />
      </header>
      <Breadcrumbs />
      <Outlet />
    </>
  );
}
