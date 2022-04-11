import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customError, setCustomError] = useState("");
  const navigate = useNavigate();
  const { signInWithGoogle } = useFirebase();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password).then(() => {
        navigate('/home')
    })
  };

  useEffect(() => {
    if (error?.message.includes("wrong")) {
      setCustomError("Wrong password, please give correct password");
    }
    if (error?.message.includes("user-not-found")) {
      setCustomError("User not found, please sign up before login");
    }
  }, [error]);

  return (
    <div className="form-container mt-5">
      {loading ? (
        <h2 className="text-center text-success py-5">Loading....</h2>
      ) : (
        <div className="form-main">
          <h1>Please Login</h1>
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name="email" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id="pas"
              />
              <p className="m-0 p-0">
                <small className="text-danger">{customError}</small>
              </p>
            </div>
            <input className="submit-btn" type="submit" value="Login" />
            <small style={{ textAlign: "center" }}>
              New to Hotel Taj? <Link to="/signup">Create an account</Link>
            </small>
          </form>
          <button onClick={signInWithGoogle} className="custom-btn">
            Sign In With Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
