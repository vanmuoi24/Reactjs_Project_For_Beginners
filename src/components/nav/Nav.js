import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="all">
        <Navbar expand="lg" className="navbar-custom">
          <Container>
            <Navbar.Brand className="text_title">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center flex-grow-1">
                <NavLink to={"/"} className={" nav-link "}>
                  Home
                </NavLink>
                <NavLink to={"/smartphones"} className={" nav-link "}>
                  SmartPhone
                </NavLink>
                <NavLink to={"/laptop"} className={" nav-link "}>
                  LapTop
                </NavLink>
                <NavLink to={"/fragrances"} className={" nav-link "}>
                  fragrances
                </NavLink>{" "}
                <Nav.Link>Accessories</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <i className="fa-solid fa-magnifying-glass me-3 "></i>
                </Nav.Link>
                <NavLink to={"/cart"} className={" nav-link "}>
                  <i className="fa-solid fa-bag-shopping me-3"></i>
                </NavLink>
                <Nav.Link>
                  <i className="fa-solid fa-user me-3"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
