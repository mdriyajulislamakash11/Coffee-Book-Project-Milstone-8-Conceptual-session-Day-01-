import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
  return (
    <div>
          <Toaster />
      {/* Navbar */}
      <Navbar />
      {/* dynamic route */}
      <div className="min-h-[calc(100vh-300px)] py-12 container mx-auto">

        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;
