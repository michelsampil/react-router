import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ListItem = ({ productItem }) => {
  const [item, setItem] = useState(productItem);

  return (
    <>
      <div className={classes.itemCard}>
        <img className={classes.img} src={item.image} alt={item.title} />
        <section className={classes.textSection}>
          <h2>{item.title}</h2>
          <p className={classes.text}>{item.subheading}</p>
          <p className={classes.text}>{Date(item.date)}</p>
          {/* 👇 React Router Link will replace the link tag <a href=etc></a>  */}
          <Link className={classes.button} to={`${item.id}`}>
            read more...
          </Link>
        </section>
      </div>
    </>
  );
};

export default ListItem;
