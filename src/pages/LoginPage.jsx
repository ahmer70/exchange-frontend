import React from "react";
import Login from "../components/users/Login";

const LoginPage = () => {
  return (
    <div className="d-flex align-items-center vh-100 justify-content-center">
      <div className="col-md-4 shadow rounded p-3">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
