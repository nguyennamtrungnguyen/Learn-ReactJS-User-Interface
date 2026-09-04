import { useState } from "react";
import "./App.css";
import GetListUserFromAPI from "./components/lap01/GetListUserFromAPI";
import LoadingErrorWhenGetAPI from "./components/lap02/LoadingErrorWhenGetAPI";
import GetUserByParameter from "./components/lap03/GetUserByParameter";
import SearchPostByFilter from "./components/lap04/SearchPostByFilter";
import TodoCRUD from "./components/lap05/TodoCRUD";

function App() {
  return (
    <div className="">
      <h1>Lap 01: Get List User</h1>
      <GetListUserFromAPI />
      <h1>Lap 02: Get List User With Loading and Error</h1>
      <LoadingErrorWhenGetAPI />
      <h1>Lap 03 Get User by UserID</h1>
      <GetUserByParameter />
      <h1>Lap 04 Search Post by title post</h1>
      <SearchPostByFilter />
      <h1>Lap 05 Todo CRUD</h1>
      <TodoCRUD />
    </div>
  );
}

export default App;
