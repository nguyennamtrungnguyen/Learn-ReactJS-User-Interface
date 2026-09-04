import TodoApp from "./components/lap01/TodoApp";
import Layout from "./components/lap02/Layout";
import { ThemeProvider } from "./components/lap02/ThemeContext";
import Cart from "./components/lap03/Cart";
import { CartProvider } from "./components/lap03/CartContext";

function App() {
  return (
    <div className="space-y-5">
      <TodoApp />

      <ThemeProvider>
        <Layout />
      </ThemeProvider>

      <CartProvider>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
