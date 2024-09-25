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
    }, 5000);
  };

  navigateToHome();

  const products = [
    { id: "1", icon: "🍔", price: 220, description: "Whooper" },
    { id: "2", icon: "🍟", price: 100, description: "French Fries" },
    { id: "3", icon: "🍦", price: 75, description: "Ice cream" },
    { id: "4", icon: "🍕", price: 150, description: "Pizza" },
    { id: "5", icon: "🍣", price: 300, description: "Sushi" },
  ];

  const product = products[params.productId - 1];

  return (
    <div
      style={{
        borderRadius: "15px",
        border: "solid black 4px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Product details</h1>
      <span style={{ fontSize: " 5rem" }}>{product.icon} </span>
      <p>Description: {product.description}</p>
      <span>${product.price}</span>
      <p>Product Code: {params.productId}</p>
    </div>
  );
};

export default ProductDetailPage;
