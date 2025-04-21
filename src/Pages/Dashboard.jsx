import React, { useEffect, useState } from "react";
import { getCoffeeCart } from "../utils/LocalStorage";
import Card from "./Card";

const Dashboard = () => {
  const [coffees, setCoffee] = useState([]);

  useEffect(() => {
    const favorite = getCoffeeCart();
    setCoffee(favorite);
  }, []);

  return (
    <div>
      <h2>Dasboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
