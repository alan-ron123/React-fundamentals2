import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  let Items = useSelector((state) => state.CounterReducer);
  return (
    <>
      <div className="container1">
        <div>
          <h1>Shopify</h1>
        </div>

        <div className="container2">
          <a>
            <Link to="/" className="anchor">
              Home
            </Link>
          </a>
          <a>
            <Link to="/contact" className="anchor">
              Contact
            </Link>
          </a>
          <a>
            <Link to="/more" className="anchor">
              More
            </Link>
          </a>
          <a>
            <Link to="/cart" className="anchor">
              Cart
              <sup style={{ color: " green " }}>
                {Items.length === 0 ? "" : Items.length}
              </sup>
            </Link>
          </a>
          <a>
            <Link to="/login" className="anchor">
              Login
            </Link>
          </a>
          <a>
            <Link to="/signup" className="anchor">
              SignUp
            </Link>
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
