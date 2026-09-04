import React from "react";
import "./Button.css";

const Button = ({ type = "primary", children, onClick }) => {
  const btnClass = `btn btn-${type}`;

  return (
    <div className="container">
      <button className={btnClass} onClick={onClick}>
      {children}
    </button>
    </div>
  );
};

export default Button;
