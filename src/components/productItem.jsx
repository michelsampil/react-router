import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ListItem = ({ productItem }) => {
  const [item, setItem] = useState(productItem);

  console.log("item", item);
  return (
    <>
      <div className={classes.itemCard}>
        <span className={classes.icon} role="img" aria-label={item.description}>
          {item.icon}
        </span>
        <section className={classes.textSection}>
          <h2>{item.description}</h2>
          <p className={classes.text}>Price: ${item.price}</p>
          <Link className={classes} to={`${item.id}`}>
            Details
          </Link>
        </section>
      </div>
    </>
  );
};

export default ListItem;
