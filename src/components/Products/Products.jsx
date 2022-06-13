import React from "react";
import Product from "../Products/Product/Product"

const Products = ({key,name,des}) => {
  return <div>
    <Product key={key} name={name} describe={des}/>
  </div>;
};

export default Products;
