import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Management Orders</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/order">Orders</NavLink>
        <button onClick={() => navigate("/login")}>Login</button>
      </nav>
    </div>
  );
};

export default Header;
