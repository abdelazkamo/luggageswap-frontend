import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import RegisterForm from "./component/register";
import Login from "./component/login";
import Navbar from "./component/navbar";
import Landing from "./component/landing";
import Home from "./component/home";
import Search from "./component/search";
import Offer from "./component/offer-seats";
import Departure from "./component/departure";
import Arrival from "./component/arrival";
import Message from "./component/message";

const App = () => {
  const ShowNavbar = () => {
    const location = useLocation();
    const { pathname } = location;

    // Don't show Navbar on Login and Register pages
    const showNavbar = !(pathname === "/" || pathname === "/register");

    return showNavbar ? <Navbar /> : null;
  };

  return (
    <div className="app">
      <Router>
        <ShowNavbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/offer-seats" element={<Offer />}></Route>
          <Route path="/offer-seats/departure" element={<Departure />}></Route>
          <Route path="/offer-seats/arrival" element={<Arrival />}></Route>
          <Route path="/message" element={<Message />}></Route>

          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
