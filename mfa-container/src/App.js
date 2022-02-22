import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import './App.css';

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_RED_HOST: redHost,
  REACT_APP_GREEN_HOST: greenHost,
} = process.env;

function Header() {
  return (
    <header>
      <h1>
        <a href="/green">Green</a>
        <a href="/red">Red</a>
      </h1>
    </header>
  );
}

function Red({ history }) {
  return <MicroFrontend history={history} host={redHost} name="Red" />;
}

function Green({ history }) {
  return <MicroFrontend history={history} host={greenHost} name="Green" />;
}

function Home({ history }) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route exact path="/green" element={<Green />} />
        <Route exact path="/red" element={<Red />} />
      </Route>
    </Routes>
  );
}

export default App;
