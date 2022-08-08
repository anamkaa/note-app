import React from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

const LogoutForm = () => {
  return (
    <>
      <div className="ff-auth-wrap-main">
        <div className="ff-auth-wrap">
          <div className="h5 text-center ff-auth-title">Welcome</div>
          <div className="h6">
            full name
            <br />
            email
          </div>
          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <button className=" ff-category-text btn ff-btn-primary">
              Logout
            </button>
          </div>

          <div className="ff-input-margin flex-justify-center flex flex-align-center">
            <Link to="/noteTaking">
              <div className="flex-justify-center flex flex-align-center ff-auth-text-sm">
                {" "}
                Explore videos
                <CaretRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutForm;
