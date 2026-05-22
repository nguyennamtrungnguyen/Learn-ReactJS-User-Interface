import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootPage;
