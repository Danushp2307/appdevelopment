import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () =>{
    const nav=useNavigate();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    const handleRoute = () => {
        nav('/Register')
    }
    return(
        <>
       <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password">password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Dan@123" id="password" name="password" />
          <button>Log In</button>
       </form>
       <div className="t1">Don't have an account? <span className="text-link" onClick={handleRoute}>Register here.</span></div>
       </>
    )
}