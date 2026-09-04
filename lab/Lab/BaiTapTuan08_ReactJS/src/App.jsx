import { useRecoilValue } from "recoil";
import "./App.css";
import CalculatorArea from "./components/area/CalculatorArea";
import Cart from "./components/lap05/Cart";
import ProductList from "./components/lap05/ProductList";
import Toast from "./components/lap06/Toast";
import UserList from "./components/lap07/UserList";
import SearchUser from "./components/lap08/SearchUser";
import { authState } from "./components/recoil/AuthState";
import Login from "./components/lap09/Login";
import Profile from "./components/lap09/Profile";
import Application from "./components/lap10/Application";

function App() {
  const auth = useRecoilValue(authState);
  return (
    <div>
      {/* Area */}
      <div className="area">
        <CalculatorArea />
      </div>
      {/* Lap05 */}
      <div className="lap05">
        <ProductList />
        <Cart />
      </div>

      <div className="lap06">
        <Toast />
      </div>

      <div className="lap07">
        <UserList />
      </div>

      <div className="lap08">
        <SearchUser />
      </div>

      <div className="lap09">{!auth.token ? <Login /> : <Profile />}</div>

      <div className="lap10">
        <Application />
      </div>
    </div>
  );
}

export default App;
