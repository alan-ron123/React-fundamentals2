import React from "react";

const Login = () => {
  return (
    <>
      <>
        <form>
          <div className="container-fluid border rounded mt-5 col-sm-5 p-3">
            <div className="my-2">
              <label className="form-label">Enter Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="my-2">
              <label className="form-label">Password</label>
              <input type="text" className="form-control" />
            </div>

            <div className="my-2">
              <button className="btn btn-primary form-control">Login</button>
            </div>
          </div>
        </form>
      </>
    </>
  );
};
export default Login;
