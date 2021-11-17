import React from "react";
import { useState } from "react";

const ListItem = (prop) => {
    const { productItem } = prop;
    const [ item, setItem ] = useState(productItem);

    return (
        <div>
            {item.title}
        </div>
    )
}

export default ListItem;