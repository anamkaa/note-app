import React from "react";
import LoginForm from "../components/LoginForm";
import LogoutForm from "../components/LogoutForm";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/auth-context";

export const LoginPage = () => {
  const {user:{isLogged}} = useAuth();
  return (
    <>
      <Navbar />
      {
        isLogged ? <LogoutForm /> : <LoginForm />
      }

    </>
  );
};


