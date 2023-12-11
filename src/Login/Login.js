import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../Redux/actions";
const LoginSection = () => {
  let navi = useNavigate();
  const path = useDispatch();
  const [valueemail, setvalueemail] = useState();
  const [valuepass, setvaluepass] = useState();
  const datauser = useSelector((state) => state.productredux.user);
  let userSchema = yup.object({
    email: yup.string().email("email không hợp lệ"),
    password: yup
      .string()
      .min(8, "Tối thiểu 8 ký tự")
      .max(12, "Tối đa 12 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });
  console.log(datauser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const handlelogin = () => {
    console.log(datauser);
    const confirmUser = datauser;
    if (confirmUser) {
      if (confirmUser.password === valuepass) {
        path(
          login({
            status: true,
          })
        );
        toast.success("Login secces");
        navi("/");
      } else {
        toast.error("Incorrect password");
      }
    } else {
      toast.error("Login failed!");
    }
  };

  return (
    <section className="">
      <Container fluid className="h-custom flex-grow-1 mt-2 ">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col md={9} lg={6} xl={5}>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </Col>
          <Col md={8} lg={6} xl={4} className="offset-xl-1">
            <Form onSubmit={handleSubmit(handlelogin)}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start text-center">
                <p className="lead fw-normal mb-0 me-3 display-3 ">Login</p>
              </div>
              <div className="divider d-flex align-items-center my-4"></div>

              <Form.Group className="mb-4" controlId="form3Example3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter a valid email address"
                  size="lg"
                  {...register("email")}
                  onChange={(event) => setvalueemail(event.target.value)}
                />
                <span style={{ color: "red" }}>{errors?.email?.message}</span>
              </Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Group className="mb-3" controlId="form3Example4">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  size="lg"
                  {...register("password")}
                  onChange={(event) => setvaluepass(event.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check
                  className="mb-0"
                  type="checkbox"
                  label="Remember me"
                  id="form2Example3"
                />
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </Button>
                <div className=" d-flex align-items-center mt-2 ">
                  {" "}
                  <span>Don't have an account? </span>
                  <NavLink to={"/register"}>register</NavLink>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
        <ToastContainer></ToastContainer>
      </Container>
    </section>
  );
};

export default LoginSection;
