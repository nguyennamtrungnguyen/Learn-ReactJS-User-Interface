import "./App.css";
import ProductCard from "./lap01_components/ProductCard";
import Button from "./lap02_components/Button";
import { SiFoodpanda } from "react-icons/si";
import { useState } from "react";
import Alert from "./lap03_components/Alert";
import LoginForm from "./lap04_components/LoginForm";
import ProductList from "./lap05_components/ProductList";
function App() {
  //     {/* Lap 01 */}
  //  return (
  //   <div id="app">
  //     <ProductCard />
  //   </div>
  //   )

  // -------------------------------------------------------------------

  // {
  //   /* Lap 02 */
  // }
  // var primary = "#6eb7e8";
  // var danger = "#ef8e84";
  // var success = "#91eeb8";
  // var color = "";
  // const ChangeBackground = (color) => {
  //   let app = document.getElementById("icon-panda");
  //   app.setAttribute("style", `color: ${color}`);
  // };
  // return (
  //   <div id="app">
  //     <div className="panda">
  //       <SiFoodpanda id="icon-panda" />
  //     </div>
  //     <div className="lap02">
  //       <Button type="primary" onClick={() => ChangeBackground(primary)}>
  //         Primary
  //       </Button>

  //       <Button type="danger" onClick={() => ChangeBackground(danger)}>
  //         Danger
  //       </Button>
  //       <Button type="success" onClick={() => ChangeBackground(success)}>
  //         Success
  //       </Button>
  //     </div>
  //   </div>
  // );

  // ----------------------------------------------------------------------

  // {
  //   /* Lap 03 */
  // }
  // return (
  //   <div id="app">
  //     <div className="lap03">
  //       <Alert />
  //     </div>
  //   </div>
  // );

  // Lap 04
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  // const openLogin = () => {
  //   setIsLoginOpen(true);
  // };

  // const closeLogin = () => {
  //   setIsLoginOpen(false);
  // };

  // return (
  //   <div id="app" className="app">
  //     <div className="lap04">
  //       <Button className="open-login-btn" onClick={openLogin}>
  //         Mở form đăng nhập
  //       </Button>

  //       <LoginForm isOpen={isLoginOpen} onClose={closeLogin} />
  //     </div>
  //   </div>
  // );

  // Lap 05
  return (
    <div id="">
      <ProductList />
    </div>
  );
}

export default App;
