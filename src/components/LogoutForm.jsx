import React from "react";
import { CaretRight } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const LogoutForm = () => {

  const {
    user: { userInfo },
    setUser,
  } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");

    setUser({
      isLogged: false,
    });
    navigate("/");
  };

  return (
    <>
      <div className="ff-auth-wrap-main">
        <div className="ff-auth-wrap">
          <div className="h5 text-center ff-auth-title">  Welcome {userInfo?.firstName}</div>
          <div className="h6">
          {userInfo?.firstName} {userInfo?.lastName}
            <br />
            {userInfo?.email}
          </div>
          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <button className=" ff-category-text btn ff-btn-primary"  onClick={() => {
                logoutHandler();
              }}>
              Logout
            </button>
          </div>

          <div className="ff-input-margin flex-justify-center flex flex-align-center">
            <Link to="/noteTaking">
              <div className="flex-justify-center flex flex-align-center ff-auth-text-sm">
                {" "}
                Take notes
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
