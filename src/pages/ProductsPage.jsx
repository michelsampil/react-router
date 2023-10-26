import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/productList";

const url_1 = "https://mocki.io/v1/e4132701-230c-4e1d-93f8-c8c27cab9b48";

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
    console.log("productList: ", productList);
  }, []);

  return !isLoading && <ProductList items={productList} />;
};

export default ProductPage;
