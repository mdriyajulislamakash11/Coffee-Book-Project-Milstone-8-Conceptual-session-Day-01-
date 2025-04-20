import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeesCard = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (category) {
      const filterByCoffees = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterByCoffees);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  //   console.log();
  return (
    <div className="my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>

      <button className="btn btn-warning my-6" onClick={() => navigate('/coffees')}>Aiew All</button>
    </div>
  );
};

export default CoffeesCard;
