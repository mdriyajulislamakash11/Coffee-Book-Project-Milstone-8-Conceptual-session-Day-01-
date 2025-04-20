import React from "react";

const Card = ({ coffee }) => {
  const {
    popularity,
    rating,
    description,
    type,
    origin,
    category,
    image,
    name,
  } = coffee || {};

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <figure className="h-52 overflow-hidden">
        <img src={image} alt={name} className="w-full object-cover" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{description?.slice(0, 100)}...</p>
        <div className="text-sm text-gray-500">
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Type:</span> {type}</p>
          <p><span className="font-semibold">Origin:</span> {origin}</p>
        </div>
        <div className="flex justify-between items-center text-sm font-medium mt-2">
          <p>⭐ {rating}</p>
          <p>🔥 {popularity} popularity</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
