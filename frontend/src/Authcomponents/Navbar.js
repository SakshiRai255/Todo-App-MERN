import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Navbar({ user }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-dark text-light">
      <div className="container-fluid">
        <span className="navbar-brand text-light">Todo</span>
        <div className="nav d-flex px-2">
          {user ? (
            <button
              type="button"
              className="btn" style={{color:"#fff", border:"2px solid #fff"}}
              onClick={() => {
                auth.signOut();
                navigate("/login");
              }}
            >
              Log Out
            </button>
          ) : (
            <>
              <Link className="nav-link text-light rounded mx-1" to="/login" style={{color:"#fff", border:"2px solid #fff"}}>
                Log In
              </Link>
              <Link className="nav-link text-light rounded mx-1" to="/signup" style={{color:"#fff", border:"2px solid #fff"}}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
