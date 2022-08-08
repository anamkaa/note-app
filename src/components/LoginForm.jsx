import React from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="ff-auth-wrap-main">
        <div className="ff-auth-wrap">
          <div className="h5 text-center ff-auth-title">Login</div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <label for="ff-email" className="ff-auth-input-text text-left">
              Email address
            </label>
            <input type="text" id="ff-email" className="ff-input" required />
          </div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <label for="ff-password" className="ff-auth-input-text text-left">
              Password
            </label>
            <input
              type="password"
              id="ff-password"
              className="ff-input"
              required
            />
          </div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <button className=" ff-category-text btn ff-btn-primary">
              Login
            </button>
            <button className=" ff-category-text btn ff-btn-primary">
              Login as Guest
            </button>
          </div>

          <div className="ff-input-margin flex-justify-center flex flex-align-center">
            <Link to="/signup">
              <div className="flex-justify-center flex flex-align-center ff-auth-text-sm">
                {" "}
                Create new account
                <CaretRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
