import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { RequireAuth } from "./context/authContext";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
