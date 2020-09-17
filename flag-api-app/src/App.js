import React from 'react';
import './App.css';
import Nav from './components/Navigation/Nav';
import Home from './routes/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
