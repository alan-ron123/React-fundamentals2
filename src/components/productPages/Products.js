import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../../redux/Action";
import { useEffect, useState } from "react";

const Products = () => {
  let [Items, setItems] = useState([]);

  useEffect(() => {
    // let datafetch = async () => {
    //   let response = await fetch("https://fakestoreapi.com/products")
    //     .then((a) => a)
    //     .then((data) => setItems(data));

    //   console.log(response.json());
    // };
    // datafetch();
    fetch("https://fakestoreapi.com/products")
      .then((a) => a.json())
      .then((data) => setItems(data));
  }, []);
  let dispatch = useDispatch();
  let product = useSelector((state) => state);
  console.log(product);

  return (
    <>
      <div className="d-flex gap-5 flex-wrap justify-content-center mt-5 rounded">
        {Items.map((a) => {
          console.log(a);
          return (
            <div className="card">
              <img style={{ height: "200px", width: "200px" }} src={a.image} />
              <strong className="text-center">Price:{a.price}</strong>
              <strong className="text-center">Category:{a.category}</strong>
              <button
                className="btn btn-success"
                onClick={() => dispatch(AddToCart(a))}
              >
                AddToCart
              </button>
            </div>
          );
        })}
        {/* <button onClick={() => dispatch(AddToCart(TV))}>AddToCart</button> */}
      </div>
    </>
  );
};
export default Products;
