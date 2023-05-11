import React, { useState } from "react";
import { Link } from "react-router-dom";
import {app} from './firebaseConfig'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  let auth = getAuth();
  const navigate = useNavigate()
  const signinHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, mail, password).then(() => {navigate('/')} ).catch(() => {
      navigate('/signin')
      alert('Incorrect credentials')
    } )
    setMail('')
    setPassword('')
    
    
  }




  return (
    <>
      <div className="signin">
    <div className="dont-have">
        <p>Don't have an account? <span><Link to={'/signup'}>Register here</Link> </span></p>
    </div>
        <div className="signin-animate">
          <div className="logo">
          <Link to="/">
          <img width={200} src="FULL CART (1).png" alt="logo" />
        </Link>
          </div>
          <h2>Hello, Welcome</h2>
          <div className="animate-logo">
            <img width={400} src="shop.svg" alt="" />
          </div>
        </div>
        <div className="signin-form">

            
            <h4>Sign In</h4>
            
                <form onSubmit={signinHandler}>
                    <div className="mail my-3">
                <p>Email address</p>
                    <input className="form-control w-50" value={mail} onChange={e => setMail(e.target.value)}  type="text" />

                    </div>
                    <div className="pass my-3">
                        <p>Password</p>
                        <input className="form-control w-50" value={password} onChange={e => setPassword(e.target.value)} type="password"  />
                    </div>
                    <div className="my-3 signin-remember-forgot w-50 d-flex justify-content-between align-items-center">
                        <div className="remember my-3 d-flex justify-content-center align-items-baseline  w-25">
                            <input type="checkbox" />
                            <p>Remember me</p> 
                        </div>
                        <h6>Forgot password?</h6>

                    </div>
                    <button className=" my-3 btn btn-success w-50">Login</button>
                </form>

        </div>
      </div>
    </>
  );
}

export default SignIn;
