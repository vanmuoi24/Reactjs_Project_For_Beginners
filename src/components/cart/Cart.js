import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const dataprdoctRedux = useSelector(
    (state) => state.productredux.productredux
  );

  const [total, settotal] = useState(0);

  const [inputValues, setInputValues] = useState(dataprdoctRedux.map(() => 1));

  useEffect(() => {
    const totalPrice = dataprdoctRedux.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);

    settotal(totalPrice);
  }, [dataprdoctRedux]);
  const handleInputChange = (event, index) => {
    const { value } = event.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = parseInt(value) || 0;
    const updatedPrices = dataprdoctRedux.map((item, i) => {
      const quantity = newInputValues[i] || 1;
      return item.price * quantity;
    });
    const totalproduct = updatedPrices.reduce((acc, price) => acc + price, 0);
    settotal(totalproduct);
    setInputValues(newInputValues);
  };
  console.log("check", total);
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
                    {dataprdoctRedux.map((item, index) => (
                      <Card className="mb-3">
                        <Card.Body>
                          <Row className="d-flex justify-content-between">
                            <React.Fragment key={index}>
                              <Col className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={item.images[0]}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: "65px" }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{item.title}</h5>
                                  <p className="small mb-0">
                                    {item.description}
                                  </p>
                                </div>
                              </Col>
                              <Col className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <Form.Control
                                    type="number"
                                    value={inputValues[index] || 1}
                                    onChange={(event) =>
                                      handleInputChange(event, index)
                                    }
                                  />
                                </div>
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">
                                    $
                                    {item.price *
                                      parseFloat(inputValues[index] || 1)}
                                  </h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </Col>
                            </React.Fragment>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
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
                          <p className="mb-2">${total}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">${total}</p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>${total + 2000}</span>
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
