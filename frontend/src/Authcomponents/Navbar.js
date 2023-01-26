import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import './Auth.css'

function Navbar({ user }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-dark text-light">
      <div className="container-fluid">
        <span className="navbar-brand text-light">Todo</span>
        <div className="nav d-flex px-2">
          {user ? (
            <>
             <form class="d-flex mx-auto" role="search">
                <input class="form-control me-2 button" type="search" placeholder="Search"/>
             </form>

            <button type="button"className="btn button"
              onClick={() => {auth.signOut(); navigate("/login")}}>Log Out</button>
             </>
          ) : (
            <>
              <Link to="/login"><button type="button"className="btn button mx-3">Log In</button></Link>
              <Link to="/signup"><button type="button"className="btn button">Sign Up</button></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
