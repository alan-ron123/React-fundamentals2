import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let initialState = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  let navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  function onChangeHandler({ target }) {
    setUser({ ...user, [target.name]: target.value });
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password === user.cpassword) {
      navigate("/login");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container border rounded mt-5 col-sm-5 p-3">
          <h2 className="text-primary text-center">create a account</h2>
          <div className="my-2">
            <label className="form-label">Enter Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={user.name}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="my-2">
            <label className="form-label">Enter Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={user.email}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="my-2">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={user.password}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="my-2">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              name="cpassword"
              value={user.cpassword}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="my-2">
            <button className="btn btn-primary form-control">Signup</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default SignUp;
