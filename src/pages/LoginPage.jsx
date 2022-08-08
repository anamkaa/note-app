import React from "react";
import LoginForm from "../components/LoginForm";
import LogoutForm from "../components/LogoutForm";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />

      <LoginForm />
      <LogoutForm />
    </>
  );
};

export default LoginPage;
