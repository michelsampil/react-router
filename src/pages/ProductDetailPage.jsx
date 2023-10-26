import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <section>
      <h1>Product details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetailPage;
