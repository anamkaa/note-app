import React from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <div className="ff-auth-wrap-main">
        <div className="ff-auth-wrap">
          <div className="h5 text-center ff-auth-title">Signup</div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <label for="ff-firstname" className="ff-auth-input-text text-left">
              First Name
            </label>
            <input
              type="text"
              id="ff-firstname"
              className="ff-input"
              required
            />
          </div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <label for="ff-lastname" className="ff-auth-input-text text-left">
              Last Name
            </label>
            <input type="text" id="ff-lastname" className="ff-input" required />
          </div>

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

          <div className="ff-input-margin flex flex-align-center">
            <input
              type="checkbox"
              name=""
              id="accept"
              className="ff-checkbox"
            />
            <label for="accept" className="ff-auth-text-sm">
              I accept all terms and conditions
            </label>
          </div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <button className=" ff-category-text btn ff-btn-primary">
              Create New Account
            </button>
          </div>

          <div className="ff-input-margin flex-justify-center flex flex-align-center">
            <Link to="/login">
              <div className="flex-justify-center flex flex-align-center ff-auth-text-sm">
                {" "}
                Already have an account
                <CaretRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
