import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
      <div className="form-container mt-5">
        <div className="form-main">
          <h1>Please Sing up</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input type="password" name="ConfirmPassword" id="" />
              <br />
              <small style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
            <input className="submit-btn" type="submit" value="Sign up" />
          </form>
          <button className="custom-btn">
            Sign In With Google
          </button>
        </div>
      </div>
    );
};

export default SignUp;