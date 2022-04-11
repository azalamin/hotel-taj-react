import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();

  return (
    <header>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <Link className="nav-logo" to={"/"}>
            Hotel TaJ
          </Link>
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
            <span className="text-white">
              {user?.displayName && user.displayName.slice(0, 2)}
            </span>
            {user?.uid ? (
              <button onClick={logOut} className="me-4 btn btn-primary">
                Sign Out
              </button>
            ) : (
              <Link className="nav-link me-4" to={"/login"}>
                Login
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
