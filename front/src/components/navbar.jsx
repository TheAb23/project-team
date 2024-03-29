import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../imge/search.png'
import sign from '../imge/sign.png'
import logo from '../imge/logo.png'
import { Navbar, Nav,Form,FormControl ,Button} from 'react-bootstrap';

export default class navbar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">      
      <Link to="/" className="navbar-brand"><img src={logo}/> </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Link to="/Malls" className="nav-link">Malls</Link>
      <Link to="/restaurants" className="nav-link">Restaurants</Link>
      <Link to="/entertainment" className="nav-link">Entertainment</Link>
      <Link to="/service" className="nav-link">Service</Link>
      <Link to="/aboutus" className="nav-link">About Us</Link>
      </Nav>
      <a href="#"> <img src={Search} style={{width:0, marginTop: -6}} /></a>
      <a href="#"> <img src={sign} style={{width:50}} /></a>
      </Navbar.Collapse>
      </Navbar>
     
    );
  }
}