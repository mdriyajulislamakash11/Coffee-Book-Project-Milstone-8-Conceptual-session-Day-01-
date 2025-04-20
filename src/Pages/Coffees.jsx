import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Coffees = () => {

    const data = useLoaderData()
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
