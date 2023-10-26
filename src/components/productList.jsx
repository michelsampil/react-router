import { useState } from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = (props) => {
  const { items } = props;
  console.log("items bro: ", items);
  const [productItems, setProductItems] = useState(items);

  return (
    productItems.length > 0 && (
      <>
        {productItems.map((item) => {
          return <ProductItem key={item.id} productItem={item} />;
        })}
      </>
    )
  );
};

export default ProductList;
