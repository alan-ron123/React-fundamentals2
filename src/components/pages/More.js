import React from "react";

import { NavLink, Outlet } from "react-router-dom";
const More = () => {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to="/more/homeproducts">homeproducts</NavLink>
          </li>
          <li>
            <NavLink to="/more/electronics">Electronics</NavLink>
          </li>
        </ul>
      </aside>
      <p>lorem</p>
      <div>
        <Outlet />
      </div>
      <p>lorem ipsum</p>
    </>
  );
};
export default More;
