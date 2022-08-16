import React from "react";
import { SignIn } from "phosphor-react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/filter-context";

const Navbar = () => {

  const {filterDispatch} = useFilter();

  return (
    <>
      <nav className="nav-wrap ff-nav-wrap">
        <div className="nav-head ff-nav-head text-black">
          <Link to="/">NoteApp </Link>
        </div>

        <div className="ff-nav-wrap-search">
          <input type="search" className="ff-nav-search" placeholder="search" onChange={(e)=>filterDispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})} />
        </div>

        <Link to="/login">
          <div className="ff-nav-icon-wrap">
            <div className="ff-nav-icon-chip text-black">
              <SignIn size={32} />
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
