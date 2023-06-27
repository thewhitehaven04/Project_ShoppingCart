import React from 'react';
import { NavLink, useMatches } from 'react-router-dom';
import style from './../../styles/breadcrumbs.css';

export default function Breadcrumbs() {
  const matches = useMatches();

  const matchesWithCrumbs = matches.filter((match) => match.handle);

  return (
    <nav>
      <ul className="crumbs__flex">
        {matchesWithCrumbs.map((match, index) => (
          <li key={index}>
            <NavLink to={match.pathname} end>
              {match.handle.crumb(match.data)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
