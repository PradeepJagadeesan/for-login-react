import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="not exist"){
                    alert("Enter valid Credentials")
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

            <h1>Login</h1>

            <form action="POST">
                
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /> <br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br></br>
                <input type="submit" onClick={submit} />

            </form>

            <p>OR</p>
            <div class="Enter">
            <a href="/signup">Create an Account</a>
            </div>
            

        </div>
    )
}

export default Login