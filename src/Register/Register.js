import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { Singin } from "../Redux/actions";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  let path = useDispatch();
  let navi = useNavigate();
  let userSchema = yup.object({
    firstname: yup
      .string()
      .min(2, "Tên phải chứa ít nhất 2 ký tự")
      .max(8, "Tên tối đa 8 ký tự")
      .required("Vui lòng nhập tên"),

    lastname: yup
      .string()
      .min(2, "Họ đệm phải chứa ít nhất 2 ký tự")
      .max(8, "Họ đệm tối đa 8 ký tự")
      .required("Vui lòng nhập họ đệm"),

    email: yup.string().email("email không hợp lệ"),
    password: yup
      .string()
      .min(8, "Tối thiểu 8 ký tự")
      .max(12, "Tối đa 12 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const handleRegister = (data) => {
    path({
      type: "userRegister",
      payload: {
        email: data.email,
        firstname: data.firstname,
        password: data.password,
        status: false,
      },
    });
    toast.success("Sign Up Success");
    setTimeout(() => {
      navi("/login");
    }, 2000);
  };

  return (
    <>
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
              <Form onSubmit={handleSubmit(handleRegister)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start text-center">
                  <p className="lead fw-normal mb-0 me-3 display-3 ">Singin</p>
                </div>
                <div className="divider d-flex align-items-center my-4"></div>
                <Form.Group className="mb-4" controlId="form3Example3">
                  <Form.Label className=" fw-bolder  ">Frist Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Frist Name"
                    size="lg"
                    name="firstname"
                    {...register("firstname")}
                  />
                  <span style={{ color: "red" }}>
                    {errors?.firstname?.message}
                  </span>
                </Form.Group>

                <Form.Group className="mb-4" controlId="form3Example3">
                  <Form.Label className=" fw-bolder  ">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Frist Name"
                    size="lg"
                    {...register("lastname")}
                  />
                  <span style={{ color: "red" }}>
                    {errors?.lastname?.message}
                  </span>
                </Form.Group>
                <Form.Group className="mb-4" controlId="form3Example3">
                  <Form.Label className=" fw-bolder  ">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email address"
                    size="lg"
                    {...register("email")}
                  />
                  <span style={{ color: "red" }}>{errors?.email?.message}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="form3Example4">
                  <Form.Label className=" fw-bolder  ">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    size="lg"
                    {...register("password")}
                  />
                  <span style={{ color: "red" }}>
                    {errors?.password?.message}
                  </span>
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
                    Singin
                  </Button>
                  <div className=" d-flex align-items-center mt-2 ">
                    {" "}
                    <span>Don't have an account? </span>
                    <NavLink to={"/login"}>Login</NavLink>
                  </div>{" "}
                </div>
              </Form>
            </Col>
          </Row>
          <ToastContainer></ToastContainer>
        </Container>
      </section>
    </>
  );
};

export default Register;
