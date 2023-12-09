import { Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import img from "../../acsset/img/iPhone15Pro-color.jpeg";
import img1 from "../../acsset/img/iPhone15Pro-item.jpeg";
import img2 from "../../acsset/img/iphone-15-pro-max-1tb.jpeg";
import { useEffect, useState } from "react";
import { fetchAllproducts } from "../../services/products";
import "./home.scss";
const Fragrances = (props) => {
  const [product, setproducts] = useState([]);
  const fetapiprodct = async () => {
    let res = await fetchAllproducts();
    console.log(res.products);
    if (res && res.products) {
      setproducts(res.products);
    }
  };

  useEffect(() => {
    fetapiprodct();
  }, []);

  return (
    <Container>
      <Carousel>
        <Carousel.Item className="item">
          <div className="d-flex justify-content-center align-items-center">
            <img className="d-block w-50" src={img} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="item">
          <div className="d-flex justify-content-center align-items-center">
            <img className="d-block w-50" src={img1} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="item">
          <div className="d-flex justify-content-center align-items-center">
            <img className="d-block w-50" src={img2} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="text-center">
        <h2>SmartPhone</h2>
      </div>
      <Container>
        <Row className="mt-5 justify-content-center">
          {product.map((item, index) =>
            item.category === "fragrances" ? (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                <Card style={{ height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={item.images[0]}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              false
            )
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Fragrances;
