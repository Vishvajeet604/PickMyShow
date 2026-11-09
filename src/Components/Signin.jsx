import { useContext, useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from './UserProvider';


function Signin (){
const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
const navigate= useNavigate();

const {user,setUser}= useContext(UserContext);

const loginUSer =async(e)=>{
    e.preventDefault();
    try{
    const res =await axios.post("http://localhost:5000/Login",{
           email: email,
    password: password
    });
    if(res.status === 200){
        sessionStorage.setItem("email",email);
        alert("Login Successfull")
        setUser({
            ...user,
            username:res.data.username,
            email:res.data.email,
            contact:res.data.contact
        })
        navigate("/");
    }
      } catch (error) {
       console.error("Login error:", error.response?.data);
        alert(
            error.response?.data?.msg ||
            "Login failed. Please check your email and password."
        );
    }
};

    return(
        <>
            <div className="Signin-page">
            <form className="Signin-box" onSubmit={loginUSer}>
                <div className="Signin-icon">✦</div>

                <h2>Welcome Back!</h2>
                <p className="Signin-subtitle">
                    Sign in to manage your events
                </p>

                <div className="Signin-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="Signin-field">
                    <label htmlFor="password">Password</label>
                    <div className="password-box">
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    
                    </div>
                </div>

                <div className="Signin-options">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="/ForgotPassword">Forgot Password?</a>
                </div>

                <button type="submit" className="Signin-button">
                    Sign In <span>→</span>
                </button>

                <p className="signup-link">
                    Don't have an account?
                    <a href="/Signup"> Register</a>
                </p>
            </form>
        </div>
        
        </>
    )
}

export default Signin;