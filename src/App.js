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
import Decor9 from './components/Fullscreen/Decor/Decor9';
import Decor10 from './components/Fullscreen/Decor/Decor10';
import Decor11 from './components/Fullscreen/Decor/Decor11';
import Decor12 from './components/Fullscreen/Decor/Decor12';
import Decor13 from './components/Fullscreen/Decor/Decor13';



import Frame1 from './components/Fullscreen/Frames/Frame1';
import Frame2 from './components/Fullscreen/Frames/Frame2';
import Frame3 from './components/Fullscreen/Frames/Frame3';
import Frame4 from './components/Fullscreen/Frames/Frame4';
import Frame5 from './components/Fullscreen/Frames/Frame5';
import Frame6 from './components/Fullscreen/Frames/Frame6';


import Utensil1 from './components/Fullscreen/Utensils/Utensil1';
import Utensil2 from './components/Fullscreen/Utensils/Utensil2';
import Utensil3 from './components/Fullscreen/Utensils/Utensil3';
import Utensil4 from './components/Fullscreen/Utensils/Utensil4';
import Utensil5 from './components/Fullscreen/Utensils/Utensil5';
import Utensil6 from './components/Fullscreen/Utensils/Utensil6';
import Utensil7 from './components/Fullscreen/Utensils/Utensil7';
import Utensil8 from './components/Fullscreen/Utensils/Utensil8';
import Utensil9 from './components/Fullscreen/Utensils/Utensil9';


import Paper1 from './components/Fullscreen/Paper/Paper1';
import Paper2 from './components/Fullscreen/Paper/Paper2';
import Paper3 from './components/Fullscreen/Paper/Paper3';
import Paper4 from './components/Fullscreen/Paper/Paper4';


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
          <Route path='/Decor9' component={Decor9}/>
          <Route path='/Decor10' component={Decor10}/>
          <Route path='/Decor11' component={Decor11}/>
          <Route path='/Decor12' component={Decor12}/>
          <Route path='/Decor13' component={Decor13}/>


          <Route path='/Frame1' component={Frame1}/>
          <Route path='/Frame2' component={Frame2}/>
          <Route path='/Frame3' component={Frame3}/>
          <Route path='/Frame4' component={Frame4}/>
          <Route path='/Frame5' component={Frame5}/>
          <Route path='/Frame6' component={Frame6}/>

          
          <Route path='/Utensil1' component={Utensil1}/>
          <Route path='/Utensil2' component={Utensil2}/>
          <Route path='/Utensil3' component={Utensil3}/>
          <Route path='/Utensil4' component={Utensil4}/>
          <Route path='/Utensil5' component={Utensil5}/>
          <Route path='/Utensil6' component={Utensil6}/>
          <Route path='/Utensil7' component={Utensil7}/>
          <Route path='/Utensil8' component={Utensil8}/>
          <Route path='/Utensil9' component={Utensil9}/>

          <Route path="/Paper1" component={Paper1}/>
          <Route path="/Paper2" component={Paper2}/>
          <Route path="/Paper3" component={Paper3}/>
          <Route path="/Paper4" component={Paper4}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
