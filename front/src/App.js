import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Malls from './components/malls'
import Restaurants from './components/restaurants'
import Entertainment from './components/entertainment'
import Service from './components/service'
import Aboutus from './components/aboutus'

function App() {
  return (
    <Router>
    <Navbar/>
    <br/>

    <Route path="/" exact component={Home}/>
    <Route path="/malls" component={Malls}/>
    <Route path="/restaurants" component={Restaurants}/>
    <Route path="/entertainment" component={Entertainment}/>
    <Route path="/service" component={Service}/>
    <Route path="/aboutus" component={Aboutus}/>
    <Footer/>

    </Router>
  );
}

export default App;
