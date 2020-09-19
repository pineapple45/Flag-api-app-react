import React from 'react';
import './App.css';
import Nav from './components/Navigation/Nav';
import Home from './routes/Home/Home';
import Detail from './routes/Detail/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:name" component={Detail} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
