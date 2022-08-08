import React from "react";
import LoginForm from "../components/LoginForm";
import LogoutForm from "../components/LogoutForm";
import Navbar from "../components/Navbar";

export const LoginPage = () => {
  return (
    <>
      <Navbar />

      <LoginForm />
      <LogoutForm />
    </>
  );
};


