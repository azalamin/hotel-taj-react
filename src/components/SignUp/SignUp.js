import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMisMatch, setPasswordMisMatch] = useState('');
    
    const {signInWithGoogle} = useFirebase();
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setPasswordMisMatch("Password length cannot be less than 6");
            return
        }

        if (password !== confirmPassword) {
            setPasswordMisMatch('Confirm password Not Matched!!');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    
    return (
      <div className="form-container mt-5">
        {loading ? (
          <h2 className="text-center text-success py-5">Loading....</h2>
        ) : (
          <div className="form-main">
            <h1>Please Sign up</h1>
            <form onSubmit={handleCreateUser}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  onBlur={handleEmailBlur}
                  type="email"
                  name="email"
                  id=""
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onBlur={handlePasswordBlur}
                  type="password"
                  name="password"
                  id="pass"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  onBlur={handleConfirmPasswordBlur}
                  type="password"
                  name="ConfirmPassword"
                  id="c-pass"
                  required
                />
                <p className='m-0 p-0'>
                  <small className='text-danger'>{passwordMisMatch}</small>
                </p>
                <br />
              </div>
              <input className="submit-btn" type="submit" value="Sign up" />
              <small style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Login</Link>
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

export default SignUp;