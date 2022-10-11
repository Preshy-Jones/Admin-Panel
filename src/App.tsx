import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { LINKS } from "./utils/constants";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { UserDashboard, UserDetails } from "./pages/Dashboard";
import Layout from "./components/layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={LINKS.BASE_URL} element={<Home />} />
        <Route path={LINKS.LOGIN} element={<Login />} />
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route  path={LINKS.USER_DETAILS} element={<UserDetails />} />
          <Route path={LINKS.DASHBOARD} element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
