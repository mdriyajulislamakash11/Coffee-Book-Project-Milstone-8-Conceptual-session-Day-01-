import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="w-full px-4">
      <div
        role="tablist"
        className="tabs tabs-lifted w-full flex flex-wrap justify-center "
      >
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`category/${category.category}`}
            role="tab"
            className="tab flex-1 text-center text-lg font-semibold"
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
