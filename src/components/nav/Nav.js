import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const NavBar = () => {
  let navi = useNavigate();
  const [lengthcart, setlengthcart] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const dataprdoctRedux = useSelector(
    (state) => state.productredux.productredux
  );
  useEffect(() => {
    setlengthcart(dataprdoctRedux.length);
  }, [dataprdoctRedux]);
  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "login") {
      navi("/login");
    } else if (event.target.value === "logout") {
    }
  };
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
              </Nav>
              <Nav>
                <NavLink to={"/cart"} className={" nav-link "}>
                  <i className="fa-solid fa-bag-shopping me-3"></i>
                  <span>{lengthcart}</span>
                </NavLink>
                <Nav.Link>
                  <i className="fa-solid fa-user me-3"></i>
                </Nav.Link>
                <Nav.Link>Muoi</Nav.Link>
                <select value={selectedOption} onChange={handleSelection}>
                  <option value="">Select an option</option>
                  <option value="login">Login</option>
                  <option value="logout">Logout</option>
                </select>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
