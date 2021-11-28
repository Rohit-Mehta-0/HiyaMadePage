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
import Decor1 from './components/Fullscreen/Decor/Decor1';
import Decor2 from './components/Fullscreen/Decor/Decor2';
import Decor3 from './components/Fullscreen/Decor/Decor3';
import Decor4 from './components/Fullscreen/Decor/Decor4';
import Decor5 from './components/Fullscreen/Decor/Decor5';
import Decor6 from './components/Fullscreen/Decor/Decor6';
import Decor7 from './components/Fullscreen/Decor/Decor7';
import Decor8 from './components/Fullscreen/Decor/Decor8';
import Frame1 from './components/Fullscreen/Frames/Frame1';
import Frame2 from './components/Fullscreen/Frames/Frame2';
import Frame3 from './components/Fullscreen/Frames/Frame3';
import Frame4 from './components/Fullscreen/Frames/Frame4';
import Frame5 from './components/Fullscreen/Frames/Frame5';
import Frame6 from './components/Fullscreen/Frames/Frame6';
import Frame7 from './components/Fullscreen/Frames/Frame7';
import Frame8 from './components/Fullscreen/Frames/Frame8';
import Utensil1 from './components/Fullscreen/Utensils/Utensil1';
import Utensil2 from './components/Fullscreen/Utensils/Utensil2';
import Utensil3 from './components/Fullscreen/Utensils/Utensil3';
import Utensil4 from './components/Fullscreen/Utensils/Utensil4';
import Utensil5 from './components/Fullscreen/Utensils/Utensil5';
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
          <Route path='/Decor1' component={Decor1}/>
          <Route path='/Decor2' component={Decor2}/>
          <Route path='/Decor3' component={Decor3}/>
          <Route path='/Decor4' component={Decor4}/>
          <Route path='/Decor5' component={Decor5}/>
          <Route path='/Decor6' component={Decor6}/>
          <Route path='/Decor7' component={Decor7}/>
          <Route path='/Decor8' component={Decor8}/>
          <Route path='/Frame1' component={Frame1}/>
          <Route path='/Frame2' component={Frame2}/>
          <Route path='/Frame3' component={Frame3}/>
          <Route path='/Frame4' component={Frame4}/>
          <Route path='/Frame5' component={Frame5}/>
          <Route path='/Frame6' component={Frame6}/>
          <Route path='/Frame7' component={Frame7}/>
          <Route path='/Frame8' component={Frame8}/>
          <Route path='/Utensil1' component={Utensil1}/>
          <Route path='/Utensil2' component={Utensil2}/>
          <Route path='/Utensil3' component={Utensil3}/>
          <Route path='/Utensil4' component={Utensil4}/>
          <Route path='/Utensil5' component={Utensil5}/>


          


        </Switch>
      </Router>
    </>
  );
}

export default App;
