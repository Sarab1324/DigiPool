import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app, database} from './firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

function SignUp() {
  let auth = getAuth();
  const collectionRef = collection(database, "users");
    const [first, setFirst] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, mail, password).then(res => console.log(res.user)).catch(err => alert(err.message))
        addDoc(collectionRef, {
          email: mail,
          password: password,
          contact: phone,
          fullName: first
        }).then(res => console.log('user stored in database')).catch(err => alert(err.message))
       
        navigate('/signin')



    }
  
  return (
    <>
      <div className="signin">
      <div className="dont-have">
        <p>
          Already have an account? <Link to={'/signin'}><span >Login here</span></Link> 
        </p>
      </div>
        <div className="signin-animate">
          <div className="logo">
          <Link to="/">
          <img width={200} src="FULL CART (1).png" alt="logo" />
        </Link>
          </div>
          <h2 className="mx-3">
            Increase project efficiency through better management using
            DigiPool.
          </h2>
          <div className="animate-logo">
            <img width={400} src="save.svg" alt="" />
          </div>
        </div>
        <div className="signin-form">
          
            <h4>Sign Up</h4>
          
            <form onSubmit={handleForm}>
                <div className="first-last d-flex justify-content-between align-items-center w-50">
                <div className="first">
            <p>Full name</p>
                <input value={first} onChange={(e) => setFirst(e.target.value)} className="form-control w-100" type="text" />
               

                </div>
                <div className="last">
                <p>Phone Number</p>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control w-100" type="contact" />
                </div>

                </div>
              <div className="mail my-3">
                <p>Email address</p>
                <input value={mail} onChange={(e) => setMail(e.target.value)} className="form-control w-50" type="text" />
              </div>
              <div className="pass my-3">
                <p>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control w-50" type="password" />
              </div>
              <button className=" my-3 btn btn-success w-50">Register</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
