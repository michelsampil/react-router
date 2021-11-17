import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList.jsx";

const url_1 = "https://run.mocky.io/v3/00efa05c-2efd-4b33-9957-5d5a84285a3e";
const url_2 = "https://run.mocky.io/v3/bee07291-0003-4391-8f21-b216e3d28d51";

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
