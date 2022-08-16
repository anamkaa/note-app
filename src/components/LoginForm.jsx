import React,{useState} from "react";
import { CaretRight } from "phosphor-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth-context";

const LoginForm = () => {

  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", JSON.stringify(data.encodedToken));

      setUser({
        isLogged: true,
        tokenVal: JSON.stringify(data.encodedToken),
        userInfo: data.foundUser,
      });
      navigate(location.state.from.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const guestLoginHandler = async () => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: "guestuser@gmail.com",
        password: "guestuser123",
      });

      localStorage.setItem("token", JSON.stringify(data.encodedToken));

      setUser({
        isLogged: true,
        tokenVal: JSON.stringify(data.encodedToken),
        userInfo: data.foundUser,
      });
      navigate(location.state.from.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="ff-auth-wrap-main">
        <div className="ff-auth-wrap">
          <div className="h5 text-center ff-auth-title">Login</div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <label for="ff-email" className="ff-auth-input-text text-left">
              Email address
            </label>
            <input type="text" id="ff-email" className="ff-input" required 
             onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}/>
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <div className="ff-input-margin ff-auth-wrap-input flex flex-col">
            <button className=" ff-category-text btn ff-btn-primary"  onClick={() => {
                loginHandler();
              }}>
              Login
            </button>
            <button className=" ff-category-text btn ff-btn-primary"   onClick={() => {
                guestLoginHandler();
              }}>
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
