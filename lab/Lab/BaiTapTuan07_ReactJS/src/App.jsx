import "./App.css";
import { RecoilRoot } from "recoil";
import Login from "./components/lap03/Login";
import UserInfo from "./components/lap03/UserInfo";
import Lap04 from "./components/lap04/Lap04";
import Lap01 from "./components/lap01/Lap01";
import Lap02 from "./components/lap02/Lap02";
import Lap03 from "./components/lap03/Lap03";

function App() {
  return (
    <div className="app">
      <div className="lap1">
        <h1>Bài 1</h1>
        <Lap01 />
      </div>

      <hr />
      <div className="lap2">
        <h1>Bai 2</h1>
        <Lap02 />
      </div>
      <hr />
      <div className="lap3">
        <h1>Bai 3</h1>
        <Lap03 />
        <Login />
        <UserInfo />
      </div>
      <hr />
      <div className="lap4">
        <h1>Bai 4</h1>
        <Lap04 />
      </div>
    </div>
  );
}

export default App;
