import React from 'react';
import { NavLink, useMatches } from 'react-router-dom';
import style from '@styles/breadcrumbs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Breadcrumbs() {
  const matches = useMatches();

  const matchesWithCrumbs = matches.filter((match) => match.handle);

  return (
    <nav>
      <ul className="crumbs__flex">
        {matchesWithCrumbs.map((match, index) => (
          <li key={index} className='crumb-container'>
            <NavLink
              to={match.pathname}
              className={({ isActive }) =>
                isActive ? 'crumb' : 'crumb crumb__inactive'
              }
              end
            >
              {match.handle.crumb(match.data)}
            </NavLink>
            {index + 1 < matchesWithCrumbs.length && (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
