import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = (prop) => {
  const { productItem } = prop;
  const [item, setItem] = useState(productItem);

  return (
    <>
      <Link to={`${item.id}`} >{item.title}</Link>
    </>
  );
};

export default ListItem;
