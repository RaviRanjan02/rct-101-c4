import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Products from "../components/Products/Products";
import { product } from "../store/product/product.actions";

const Home = () => {
  const dispatch = useDispatch();

  const { data, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(product());
  });

  return (
    <div>
      {data.map((el) => (
        <Products key={el.id} name={el.name} des={el.description} />
      ))}
    </div>
  );
};

export default Home;
