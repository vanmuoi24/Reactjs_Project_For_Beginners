import { Container, Row, Col, Button, Card } from "react-bootstrap";
import banner from "../../acsset/img/Rectangle 4.png";
import { useNavigate, useParams } from "react-router";
import { fetchProductById } from "../../services/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../../Redux/actions";
import { ToastContainer, toast } from "react-toastify";

const Viewproduct = () => {
  const { id } = useParams();
  let navi = useNavigate();
  const dataprdoctRedux = useSelector(
    (state) => state.productredux.productredux
  );
  console.log("check", dataprdoctRedux);
  const [dataItem, setDataItem] = useState({});
  const [img, setimg] = useState();
  const fetchItemById = async (productId) => {
    try {
      const response = await fetchProductById(productId);
      setDataItem(response);
      if (response.images && response.images.length > 0) {
        setimg(response.images[0]);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const path = useDispatch();
  useEffect(() => {
    fetchItemById(id);
  }, [id]);
  const handlegotocart = (item) => {
    console.log(item);
    const isItemExists = dataprdoctRedux.find(
      (itemcart) => itemcart.id === parseFloat(item.id)
    );

    if (isItemExists) {
      toast.error("Item already exists in the cart!");
    } else {
      path(addcart(item));
      navi("/cart");
    }
  };
  return (
    <>
      <Container>
        <Row className="mt-5 justify-content-center align-items-center ">
          <>
            {" "}
            <Col md={6}>
              <h1 className="display-5">{dataItem.brand}</h1>
              <p>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display. And with the 13‑inch
                model, you have more reasons than ever to choose Air.
                Supercharged by the M2 chip and with up to 18 hours of battery
                life both laptops deliver blazing-fast performance in an
                ultraportable design.
              </p>
              <h3>${dataItem.price}</h3>

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
              <Button
                variant="outline-danger"
                className="me-2 mt-3 "
                onClick={() => handlegotocart(dataItem)}
              >
                Go to cart
              </Button>
            </Col>
            <Col md={6}>
              <img src={img} height="400px" width="100%" alt="Product" />
            </Col>
          </>
        </Row>
        <ToastContainer></ToastContainer>
      </Container>
    </>
  );
};

export default Viewproduct;
