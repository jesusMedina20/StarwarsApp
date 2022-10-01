import React from "react";
import { Link } from "react-router-dom";
import "./itemView.css";

// src="https://cdn.pocket-lint.com/r/s/x1920/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
//
export default function ItemView({ data, type }) {
  if (!data) return;
  const splitUri = data?.url?.split("/");
  const id = splitUri[splitUri?.length - 2];

  return (
    <div className="card">
      <img src={data.image} />
      <Link to={{ pathname: `/details/${type}/${id}` }}>{data.name}</Link>
    </div>
  );
}
