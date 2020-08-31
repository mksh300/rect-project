import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Cart from '../src/components/Cart'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
     </div>
</BrowserRouter>
  );
}

export default App;
