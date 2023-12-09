import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Cart = () => {
  const [inputvalue, setinputvalue] = useState(1);
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setinputvalue(value);
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg={7}>
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>{" "}
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <Card className="mb-3">
                      <Card.Body>
                        <Row className="d-flex justify-content-between">
                          <Col className="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3"
                                alt="Shopping item"
                                style={{ width: "65px" }}
                              />
                            </div>
                            <div className="ms-3">
                              <h5>Iphone 11 pro</h5>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </Col>
                          <Col className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <Form.Control
                                type="number"
                                value={inputvalue}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div style={{ width: "80px" }}>
                              <h5 className="mb-0">$900</h5>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={5}>
                    <Card className="bg-primary text-white rounded-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>
                        <p className="small mb-2">Card type</p>
                        {/* ... */}
                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Cardholder's Name
                            </label>
                          </div>
                          {/* ... */}
                        </form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
