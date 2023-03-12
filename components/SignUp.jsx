import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import '../styles/login.scss';
import {reactLocalStorage} from 'reactjs-localstorage';

const SignUp = () => {
    const history = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        const configuration = {
            method: "post",
            url: "https://myservice-5ysh.onrender.com/register",
            data: {
                email,
                password,
                username
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
                reactLocalStorage.set("thisUser",username);
                reactLocalStorage.set("thisUserEmail",email)
                history("/homepage")
            })
            .catch((error) => {
                console.log(error);
            });





    }

    const signUpPage = (e) =>{
        navigate("/log")
    }

    return (
        <div className='logPages'>
            <div className="container">
            <h2>Register</h2>
            
            <form onSubmit={(e) => handleSubmit(e)}>

                <input type="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />


                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                <input type="text" value={username} placeholder='Enter Your name' onChange={(e) => setUsername(e.target.value)} />



                <button type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</button>

                <p>If you are already signed up log in from bellow</p>
                
                <button type="button" onClick={(e) => signUpPage(e)}>Log In</button>
                    
                
            </form>
            </div>
            
        </div>
    );
}

export default SignUp;
