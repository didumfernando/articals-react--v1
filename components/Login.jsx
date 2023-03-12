import React from 'react';
import { useEffect, useState ,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import '../styles/login.scss';
import { UserContext } from '../UserContext.cjs';
import {reactLocalStorage} from 'reactjs-localstorage';




const Login = () => {
    const history = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        if(email ==="admin@test.com" && password==="admin"){
            history("/admin")
            reactLocalStorage.set("thisUser", "admin");
            reactLocalStorage.set("thisUserEmail", email)
        }
        else {

            // set configurations
            const configuration = {
                method: "post",
                url: "https://myservice-5ysh.onrender.com/login",
                data: {
                    email,
                    password,
                },
            };
    
            // make the API call
            axios(configuration)
                .then((result) => {
                    setLogin(true);
                    setUser(result.data.email)
                    console.log(result)
    
                    if (result.data.message === "Login Successful") {
                        
                        reactLocalStorage.set("thisUser", result.data.username);
                        reactLocalStorage.set("thisUserEmail", result.data.email)
                        history("/homepage")
                    }
    
                })
                .catch((error) => {
                    alert(error.response.data.message)
    
                });
        }






    }

    const signUpPage = (e) =>{
        navigate("/signup")
    }

    return (
        <div className='logPages'>
            <div className="container">
            <h2>Log In</h2>
            <form onSubmit={(e) => handleSubmit(e)}>

                <input type="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />


                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />



                <button type="submit" onClick={(e) => handleSubmit(e)}>Log in</button>
                <p>If you are not signed up signup now below</p>
                <button type="button" onClick={(e) => signUpPage(e)}>Register</button>
                
               
                    
               
            </form>
            </div>
        </div>
    );
}

export default Login;
