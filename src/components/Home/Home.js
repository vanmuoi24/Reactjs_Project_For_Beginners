import { Container, Row, Col, Button, Card } from "react-bootstrap";
import banner from "../../acsset/img/Rectangle 4.png";
import { useEffect, useState } from "react";
import { fetchAllproducts } from "../../services/products";
import { useNavigate } from "react-router";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../../Redux/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
import _, { conforms } from "lodash";
const Home = () => {
  const [product, setproducts] = useState([]);
  const [valueinput, setvalueinput] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const dataprdoctRedux = useSelector(
    (state) => state.productredux.productredux
  );
  console.log(product);
  let navi = useNavigate();
  const dispatch = useDispatch();
  const fetapiprodct = async () => {
    let res = await fetchAllproducts();

    if (res && res.products) {
      setproducts(res.products);
    }
  };
  const handleFilterProduct = (event) => {
    let searchTerm = event.target.value.toLowerCase();
    console.log(searchTerm);

    if (searchTerm) {
      let cloneProducts = _.cloneDeep(product);

      cloneProducts = cloneProducts.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      setproducts(cloneProducts);
    } else {
      fetapiprodct(1);
    }
  };
  useEffect(() => {
    fetapiprodct();
  }, []);
  const handletocart = (itemid) => {
    console.log(itemid);
    const isItemExists = dataprdoctRedux.find(
      (item) => item.id === parseFloat(itemid.id)
    );

    if (isItemExists) {
      toast.error("Item already exists in the cart!");
    } else {
      dispatch(addcart(itemid));

      toast.success(" success to cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const hanldetoview = (id) => {
    navi(`/products/${id}`);
  };
  return (
    <>
      <Container>
        <Row className="mt-5 justify-content-center align-items-center">
          <Form.Group className="mb-3 col-5" controlId="form12">
            <Form.Control
              type="text"
              placeholder="Search Products"
              value={valueinput}
              onChange={(event) => handleFilterProduct(event)}
            />
          </Form.Group>
        </Row>
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
                  <Button
                    className=" me-3 "
                    variant="primary"
                    onClick={() => hanldetoview(item.id)}
                  >
                    View Products
                  </Button>
                  <Button
                    variant="primary"
                    className=" me-3 "
                    onClick={() => handletocart(item)}
                  >
                    Add To Card
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
        <div>
          <hr></hr>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Home;
