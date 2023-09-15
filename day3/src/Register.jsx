 import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Register.css';
 export const Register = () =>{
    const nav= useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleRoute = () => {
        nav('/Login')
    }
   return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="back">
        </div> 
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} name="name" placeholder="full name" />
           <label htmlFor="email">email</label>
           <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email@123" id="email" name="email" />
           <label htmlFor="password">password</label>
           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ema123" id="password" name="password" />
           <button type="submit">Log In</button>
        </form>
        <div className="t1">Already have an account? <span className="text-link" onClick={handleRoute}>Log In.</span></div>
        </>
   )
        
     
 }