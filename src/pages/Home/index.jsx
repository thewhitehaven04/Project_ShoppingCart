import FeaturedItem from 'components/FeaturedItem';
import React from 'react';
import style from './../../styles/home.css';
import { useLoaderData } from 'react-router-dom';

export default function HomePage() {
  /** @type import("components/FeaturedItem").FeaturedItemProps[] */

  const data = useLoaderData();

  return (
    <ul className="featured-items__flex">
      {data.map((featuredItem, index) => (
        <li key={index}>
          <FeaturedItem {...featuredItem} />
        </li>
      ))}
    </ul>
  );
}
