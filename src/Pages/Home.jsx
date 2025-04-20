import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {

    const categories = useLoaderData()
  return (
    <div>
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Header
        title="Browse Coffees by Categorys"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?"
      />

      {/* Category ways button */}
      <Categories categories={categories} />

      {/* dynamic data card */}
      <Outlet />
    </div>
  );
};

export default Home;
