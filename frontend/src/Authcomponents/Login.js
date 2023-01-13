import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);

      const notify = () => {
        toast.success(`Welcome ${result.user.email}`);
      };
      notify();

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const notify = () => {
        toast.error(`message:${error.message}`);
      };
      notify();
    }
  };

  return (
    <>
      <div className="container my-15 mt-5 py-3 px-4 border border-3 border-primary rounded">
        <h3 className="text-center mb-4">Log In</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
