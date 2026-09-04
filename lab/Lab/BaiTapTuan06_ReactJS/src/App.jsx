import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./components/lap01/Home";
import About from "./components/lap01/About";
import Contact from "./components/lap01/Contact";
import NotFound from "./components/lap02/NotFound";
import Products from "./components/lap03/Products";
import ProductDetail from "./components/lap03/ProductDetail";
import Dashboard from "./components/lap04/Dashboard";
import Profile from "./components/lap04/Profile";
import Orders from "./components/lap04/Orders";
import Settings from "./components/lap04/Settings";
import Checkout from "./components/lap05/Checkout";
import { AuthProvider } from "./components/lap06/AuthContext";
import ProtectedRoute from "./components/lap06/ProtectedRoute";
import Login from "./components/lap06/Login";
import Cart from "./components/lap07/Cart";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-100">

          <Navbar />

          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />

                <Route path="/checkout" element={<Checkout />} />

                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="profile" element={<Profile />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="/login" element={<Login />} />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <div className="bg-white p-6 rounded shadow">
                        Profile Page
                      </div>
                    </ProtectedRoute>
                  }
                />

                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />

              </Routes>
            </div>
          </main>

        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;