import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ListItem = (prop) => {
  const { productItem } = prop;
  const [item, setItem] = useState(productItem);

  return (
    <div className={classes.itemCard}>
      <img className={classes.img} src={item.image} alt={item.title} />
      <section className={classes.textSection}>
        <Link to={`${item.id}`}>{item.title}</Link>
        <p className={classes.text}>{item.subheading}</p>
        <p className={classes.text}>{Date(item.date)}</p>
        <button className={classes.button}> Read More </button>
      </section>
    </div>
  );
};

export default ListItem;
