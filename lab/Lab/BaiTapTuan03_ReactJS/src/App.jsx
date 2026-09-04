import "./App.css";

import FilterProductApp from "./lap03_components/FilterProductApp";
import TodoApp from "./lap04_components/TodoApp";
import StopWatchApp from "./lap05_components/StopwatchApp";
import FetchUsersApp from "./lap06_components/FetchUsersApp";
import Layout from "./lap07_components/Layout";
import { ThemeProvider } from "./lap07_components/ThemeContext";

function App() {
  // Lap 03

  return (
    <div className="app">
      {/* Lap 01 */}
      {/* <UserForm/> */}

      {/* Lap 02 */}
      {/* <DigitalClock/> */}

      {/* Lap 03 */}
      {/* <FilterProductApp /> */}

      {/* Lap 04 */}
      <TodoApp />

      {/* Lap 05 */}
      <StopWatchApp />

      {/* Lap 06 */}
      <FetchUsersApp />

      {/* Lap 07 */}
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
