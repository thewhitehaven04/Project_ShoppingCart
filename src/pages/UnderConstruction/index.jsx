import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from 'components/Main';
import React from 'react';
import style from './../../styles/underConstruction.css';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

export default function UnderConstruction() {
  return (
    <Main>
      <div className="font-capital font-large">Under construction</div>
      <FontAwesomeIcon className="font-warning-sign" icon={faHammer} />
    </Main>
  );
}
