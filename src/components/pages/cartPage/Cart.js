import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../../../redux/Action";
import "./cart.css";
const Cart = () => {
  let [total, setTotal] = useState(0);
  let dispatch = useDispatch();
  const cart = useSelector((state) => state.CounterReducer);
  console.log(cart);
  useEffect(() => {
    setTotal(cart.map((a) => a.price).reduce((a, b) => a + b));
  }, [cart]);
  return (
    <>
      <table>
        <tbody>
          {cart.map((value, i) => {
            return (
              <tr>
                <td>
                  <img src={value.image} alt="img" />
                </td>
                <td>price:{value.price}RS</td>
                <td>{value.description}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => dispatch(RemoveFromCart(value))}
                  >
                    RemoveFromCart
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Cart;
