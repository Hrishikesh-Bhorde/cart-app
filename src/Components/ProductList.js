import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          addqty={props.addqty}
          index={i}
          subqty={props.subqty}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>Add Products to Cart</h1>
  );
}
