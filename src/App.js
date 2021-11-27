import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category1 from './components/pages/Category1';
import Category2 from './components/pages/Category2';
import Category3 from './components/pages/Category3';
import Category4 from './components/pages/Category4';
import Cards from './components/Cards'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Category1' component={Category1} />
          <Route path='/Category2' component={Category2} />
          <Route path='/Category3'component={Category3} />
          <Route path='/Category4' component={Category4}/>
          <Route path='/Cards' component={Cards}/>
          <Route path='/Footer' component={Footer}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
