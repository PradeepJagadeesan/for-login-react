import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Signup.css"

function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Please fill in both email and password fields.");
            return;
          }
        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    alert("Account Created Successfully")
                    // history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /> <br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /> <br></br>
                <input type="submit" onClick={submit} />

            </form>

            <p>OR</p>
            <div class="Enter"> <a href="/login">Back to Login</a></div>
           

        </div>
    )
}

export default Login