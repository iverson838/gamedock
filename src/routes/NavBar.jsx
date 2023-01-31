import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartIcon from "../Components/CartIcon";
import CartDropdown from "../Components/CartDropdown";
import { UserContext } from "../contexts/UserContext";
import { Cart } from "../contexts/Cart";
import { useContext } from "react";

import { signOutUser } from "../Utilities/firebase";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(Cart);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">
                <CartIcon />
                {isCartOpen && <CartDropdown />}
              </Nav.Link>
              {currentUser ? (
                <span onClick={signOutUser}> SignOut </span>
              ) : (
                <Nav.Link href="/signin">Sign in</Nav.Link>
              )}

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
