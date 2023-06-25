import { createContext, useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @typedef {Object} BreadcrumbSegment
 * @property {String} segmentHref
 * @property {String} breadcrumbLabel
 */

const BreadcrumbsContext = createContext(null);

export default function Breadcrumbs({ children }) {
  const [segments, setSegments] = useState([]);
  /** @type BreadcrumbSegment[] */
  let lastAdded;


  /**
   * @param {BreadcrumbSegment[]} segments
   */
  const pushSegmentsToBreadcrumbs = (segments) => {
    setSegments([...breadcrumbs, ...segments]);
    lastAdded = segments;
  };

  const popSegment = () => {
    setSegments(breadcrumbs.slice(0, -lastAdded.length));
  };

  return (
    <BreadcrumbsContext.Provider
      value={[pushSegmentsToBreadcrumbs, popSegment]}
    >
      {breadcrumbs.map((segment) => (
        <NavLink key={segment.breadcrumbLabel} to={'/' + segment.segmentHref} />
      ))}
      {children}
    </BreadcrumbsContext.Provider>
  );
}
