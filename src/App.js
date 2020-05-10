import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import aaAnimate from './aa-animate.svg'

class App extends Component {
  render(){
    return (
      <div className="App container">
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
          <img
          src={aaAnimate}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
          <Navbar.Brand>
            <Link to="/">Anecdotal Aminah</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <Nav.Link>Sign-up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;