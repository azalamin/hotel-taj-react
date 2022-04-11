import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <header>
        <Navbar bg="dark" variant="dark" className="py-3">
          <Container>
            <Navbar.Brand href="#home">
              <Link className='nav-logo' to={'/'}>Hotel TaJ</Link>
            </Navbar.Brand>
            <Nav className="text-right">
              <Link className="nav-link me-4" to={"/"}>
                Home
              </Link>
              <Link className="nav-link me-4" to={"/rooms"}>
                Hotel Rooms
              </Link>
              <Link className="nav-link me-4" to={"/about"}>
                About us
              </Link>
              <Link className="nav-link me-4" to={"/login"}>
                Login
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    );
};

export default Header;