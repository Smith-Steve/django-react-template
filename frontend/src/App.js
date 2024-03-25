import React, { Component } from "react";
import Root from "./Root"; // <------------- new import
import { Route, Routes } from "react-router-dom"; // <--- remove BrowserRouter
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Root>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Root>
    );
  }
}

export default App;
