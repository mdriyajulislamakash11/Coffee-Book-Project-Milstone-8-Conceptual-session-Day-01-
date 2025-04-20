import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeesCard = () => {
  const coffees = useLoaderData();
  const {category}= useParams();

//   console.log();
  return (
    <div>
        <h2 className="my-4 border-b">category: {category}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default CoffeesCard;
