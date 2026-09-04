import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="profile">Profile</Link> | 
      <Link to="orders">Orders</Link> | 
      <Link to="settings">Settings</Link>

      <Outlet />
    </div>
  );
};

export default Dashboard;