import styled from "styled-components";
import axios from "axios";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `http://localhost:3001/api/products?category=${cat}`
          : "http://localhost:3001/api/products"
      );
      setProducts(res.data);
      console.log(res);
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
