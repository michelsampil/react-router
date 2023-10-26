import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  // React router provides a useful hook which you can use to
  // extract params 👇
  const params = useParams();

  // React router provides another useful hook which you can use
  // to navigate programmatically 👇
  const navigate = useNavigate();

  const navigateToHome = () => {
    setTimeout(() => {
      navigate("/welcome");
    }, 2000);
  };

  navigateToHome();

  return (
    <section>
      <h1>Product details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetailPage;
