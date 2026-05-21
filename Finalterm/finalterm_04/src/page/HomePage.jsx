import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[70vh] bg-gray-50">
      {/* Navbar */}
      <nav className="w-full border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">FinalTerm</h1>

          {/* Menu */}
          <div className="flex items-center gap-6 text-gray-700 font-medium">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue-600 transition"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/about")}
              className="hover:text-blue-600 transition"
            >
              About
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="hover:text-blue-600 transition"
            >
              Contact
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Login
            </button>

            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            React + TailwindCSS
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to FinalTerm
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Đây là trang chủ của ứng dụng React Router dùng TailwindCSS. Giao
            diện hiện đại, responsive và dễ mở rộng.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg">
              Bắt đầu ngay
            </button>

            <button className="px-8 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
