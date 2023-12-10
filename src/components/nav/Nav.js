import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const NavBar = () => {
  let navi = useNavigate();
  let dis = useDispatch();
  const [lengthcart, setlengthcart] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const dataprdoctRedux = useSelector(
    (state) => state.productredux.productredux
  );
  const datauser = useSelector((state) => state.productredux.user);

  useEffect(() => {
    setlengthcart(dataprdoctRedux.length);
  }, [dataprdoctRedux]);
  const handleSelection = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "login") {
      navi("/login");
    } else if (event.target.value === "logout") {
      dis({
        type: "logout",
        payload: { email: "", firstname: "", password: "" },
      });

      navi("/");
    }
  };
  useEffect(() => {}, [datauser]);
  console.log(datauser.email);
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

                <Nav.Link className="textuser">
                  {" "}
                  <i className="fa-solid fa-user me-3"></i> {datauser.firstname}
                </Nav.Link>
                <select
                  value={selectedOption}
                  onChange={handleSelection}
                  className=" me-2 "
                >
                  <option value="">Action</option>
                  {datauser.email ? (
                    <option value="logout">Logout</option>
                  ) : (
                    <option value="login">Login</option>
                  )}
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
