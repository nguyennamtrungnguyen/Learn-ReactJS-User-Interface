import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>

        <nav className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </Link>

      </div>
    </header>
  );
};

export default Navbar;