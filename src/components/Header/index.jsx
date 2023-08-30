import HeaderCartStatus from "@components/HeaderCartStatus";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMatches, Link } from "react-router-dom";
import style from '@styles/header.css';

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

export default function Header() {
  const inStore = useMatches().find((match) =>
    match.pathname.includes('store'),
  );

  return (
    <header className="header__flex header__sticky">
      <nav className="header_navigation">
        <FontAwesomeIcon icon={faMicrochip} className="header-logo" />
        <Link to="/">
          <HeaderButton type="button">Home</HeaderButton>
        </Link>
        {!inStore && (
          <Link to="/store">
            <HeaderButton type="button">Store</HeaderButton>
          </Link>
        )}
      </nav>
      <HeaderCartStatus />
    </header>
  );
}
