import { useQuery } from "react-query";
import { getAll } from "../Services/ecommerceServer";
import { useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const Home = () => {
  // const [state, dispatch] = useReducer(reducer);
  const result = useQuery("products", getAll, {
    retry: false,
  });

  if (result.isLoading) {
    return <span>Loading....</span>;
  }
  if (result.isError) {
    return (
      <span>Ecommercer service not available due to problems in server</span>
    );
  }

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        <Row>
          {result.data.products.map((product) => (
            <Col sm={6} md={4} lg={3} className="mb-3" key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
