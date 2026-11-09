import { useState } from 'react';
import "../CSS/Signup.css";
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [fullName,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [phoneNumber,setPhonenumber]=useState('');
     const [password,setPassword]=useState('');
      const [confirmpassword,setConfirmpassword]=useState('');
      const navigate = useNavigate();

      const registerUser=async(e)=>{ 
        console.log(email);
        console.log(password);
        e.preventDefault();
        const response=await fetch("http://localhost:5000/Register",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                fullName:fullName,
                email:email,
                phoneNumber:phoneNumber,
                password:password
            })
        });
        const data =await response.json();
// alert(data.msg);
if (response.status === 200){
    alert("Your Registration is Completed")
    sessionStorage.setItem("email",email);
    navigate("/OTPVerify");
}
else{
    alert("Unable To Register Try Again");
}
      }
    return (
        <>
            <form  method="POST" onSubmit={registerUser}>

                <label htmlFor="confirmPassword">
                    Enter Full Name:
                </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="fullName"
                    placeholder="Enter your Name"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setFullname(e.target.value)}}
                />

                <label htmlFor="email">Email Address:</label>
                
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="email"
                    placeholder="Enter your email"
                    required onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}
                />
                <label htmlFor="confirmPassword">
                    Enter Phone Number:
                </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="number"
                    placeholder="Enter your Phone Number"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setPhonenumber(e.target.value)}}
                />
    

                <label htmlFor="password">Password:</label>
                
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="password"
                    placeholder="Create a password"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setPassword(e.target.value) }}
                />
            

                <label htmlFor="confirmPassword">
                    Confirm Password:
                </label>
                
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="confirmPassword"
                    placeholder="Confirm your password"
                    required
                    minLength={4} onChange={(e)=>{e.preventDefault();setConfirmpassword(e.target.value)}}
                />
                <br />

                <button type="submit" >Register</button>
                <button type="reset">Clear Form</button>

            </form>

            <hr />

            <p align="center">
                Already have an account?{' '}
                <a href="/login">Login Here</a>
            </p>
        </>
    );
}

export default Signup;