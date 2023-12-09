import { Container, Row, Col, Button, Card } from "react-bootstrap";
import banner from "../../acsset/img/Rectangle 4.png";
import { useEffect, useState } from "react";
import { fetchAllproducts } from "../../services/products";
import { useNavigate } from "react-router";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
const Home = () => {
  const [product, setproducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  let navi = useNavigate();

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
  const handletocart = () => {
    navi("/cart");
  };
  return (
    <>
      <Container>
        <Row className="mt-5 justify-content-center align-items-center ">
          <Col md={6}>
            <h1 className="display-5">MacBook Air</h1>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display. And with the 13‑inch model,
              you have more reasons than ever to choose Air. Supercharged by the
              M2 chip and with up to 18 hours of battery life both laptops
              deliver blazing-fast performance in an ultraportable design.
            </p>
            <h3 className="display-6 fw-bold my-4"></h3>

            <div>
              <Button variant="outline-danger" className="me-2">
                15-Inch
              </Button>
              <Button variant="outline-danger" className="me-2">
                13 Inch M2
              </Button>
              <Button variant="outline-danger" className="me-2">
                13 Inch M1
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <img src={banner} height="400px" width="100%" alt="Product" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-5 justify-content-center">
          {currentProducts.map((item, index) => (
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
                  <Button variant="primary" onClick={handletocart}>
                    Go To Card
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className=" ">
          {" "}
          <ResponsivePagination
            current={currentPage}
            total={Math.ceil(product.length / perPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
