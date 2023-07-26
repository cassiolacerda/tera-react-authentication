import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./components/pages/Login";
import Users from "./components/pages/Users";
import Logout from "./components/pages/Logout";

import { isLogged } from "./helpers/Auth";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

const ProtectedRoute = () => {
  if (!isLogged()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
