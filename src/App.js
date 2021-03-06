import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
