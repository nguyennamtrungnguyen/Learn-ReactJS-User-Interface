import React from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/AuthState";
import Login from "./Login";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Application = () => {
  const auth = useRecoilValue(authState);

  return (
    <>
      <Notification />

      {!auth.token ? (
        <Login />
      ) : (
        <div className="container">
          <div className="left">
            <ProductList />
          </div>
          <div className="right">
            <Cart />
          </div>
        </div>
      )}
    </>
  );
};

export default Application;
