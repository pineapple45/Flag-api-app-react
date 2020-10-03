import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navigation/Nav";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Dark, setDark] = useState(false);

  return (
    <Router>
      <div className="App">
        <Nav Dark={Dark} setDark={setDark} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} Dark={Dark} setDark={setDark} />
            )}
          />
          <Route
            path="/:name"
            render={(props) => (
              <Detail {...props} Dark={Dark} setDark={setDark} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
