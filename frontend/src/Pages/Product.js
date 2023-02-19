import { useParams } from "react-router-dom";
const Product = () => {
  const id = useParams().id;
  return <div>{id}</div>;
};
export default Product;
