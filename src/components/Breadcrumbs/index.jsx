import { useLocation } from "react-router-dom";
import React from "react";

export default function Breadcrumbs() {
  const location = useLocation();
  console.dir(location);
  return (<span>lol</span>);
}