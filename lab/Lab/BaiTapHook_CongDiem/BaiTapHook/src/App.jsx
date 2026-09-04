import "./App.css";
import AsyncUsers from "./components/async/AsyncUsers";
import AxiosUsers from "./components/axios/AxiosUsers";
import FetchUsers from "./components/fetch/FetchUsers";
import UseCallBack from "./components/usecallback/UseCallBack";
import UseEffect from "./components/useeffect/UseEffect";
import UseMemo from "./components/usememo/UseMemo";
import UseReducer from "./components/usereducer/UseReducer";
import UseRef from "./components/userref/UseRef";
import UseState from "./components/usestate/UseState";
function App() {
  return (
    <>
      <UseState />
      <UseEffect/>
      <UseMemo />
      <UseReducer />
      <UseRef />
      <UseCallBack />
      <AsyncUsers />
      <AxiosUsers/>
      <FetchUsers />
    </>
  );
}

export default App;
