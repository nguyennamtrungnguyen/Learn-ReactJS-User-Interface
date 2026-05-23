import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootPage = () => {
  return (
    <div className="flex flex-col h-dvh">
      <div style={{ height: "10%" }}>
        <Header />
      </div>
      <main style={{ height: "75%" }} className="flex flex-1">
        <Outlet />
      </main>
      <div style={{ height: "10%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
