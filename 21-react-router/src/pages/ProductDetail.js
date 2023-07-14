import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </section>
  );
};
export default ProductDetailPage;
