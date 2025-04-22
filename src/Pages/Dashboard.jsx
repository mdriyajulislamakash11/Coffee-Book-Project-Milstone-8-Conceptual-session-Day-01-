import React, { useEffect, useState } from "react";
import { getCoffeeCart, removeFavorite } from "../utils/LocalStorage";
import Card from "./Card";
import Header from "../components/Header";

const Dashboard = () => {
  const [coffees, setCoffee] = useState([]);

  useEffect(() => {
    const favorite = getCoffeeCart();
    setCoffee(favorite);
  }, []);

  const handleRemoved = (id) => {
    removeFavorite(id);
    const favorite = getCoffeeCart();
    setCoffee(favorite);
  };
  return (
    <div>
      <Header
        title="Wellcome to Dashboard"
        description=" Mango coffee that you have previusly added as a favorite, you can view or remove them from here."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} handleRemoved={handleRemoved} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
