import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/productList";

const url_1 = "https://mocki.io/v1/3a34d4c9-6050-4e35-a583-e49198fc7b56";

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await axios.get(url_1);
      const productData = await response.data;

      setProductList(productData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return !isLoading && <ProductList items={productList} />;
};

export default ProductPage;
