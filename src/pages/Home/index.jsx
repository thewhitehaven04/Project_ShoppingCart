import FeaturedItem from "./../../components/FeaturedItem";
import React from "react";
import { useLoaderData } from "react-router-dom";
import style from './../../styles/home.css';

export default function HomePage() {
  /** @type import("components/FeaturedItem").FeaturedItemProps[] */
  const data = useLoaderData();
  return (
    <ul className="featured-items__flex">
      {data.map((featuredItem, index) => (
        <li
          key={index}
          className={index % 2 === 1 ? 'featured-item__background-switch' : ''}
        >
          <div className="featured-item">
            <FeaturedItem {...featuredItem} />
          </div>
        </li>
      ))}
    </ul>
  );
}
