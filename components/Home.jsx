import React from 'react';
import { useEffect, useState } from 'react';
import Card2 from "../components/Card2.jsx"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "../styles/home.scss"
import {reactLocalStorage} from 'reactjs-localstorage';



const Home = () => {
    const location = useLocation();
    const [rating, setRating] = useState("");
    const email = location.state.id;

    


    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        const configuration = {
            method: "post",
            url: "http://localhost:8000/ratings",
            data: {
                email,
                rating,
            },
        };
        console.log("config done");
        // make the API call
        axios(configuration)
            .then((result) => {
                console.log("you rated");
                
            })
            .catch((error) => {
                alert(error.response.data.message)
                console.log(error);
            });

        }


        
    return (
        <div>
            
            <h1>hello {location.state.id}</h1>
            
            <div className="category" >
            <a href="/test">
            <Card2 imageSrc={"../public/img.jpg"}/>
            </a>
            
            <a href="">
            <Card2 imageSrc={"../public/img.jpg"}/>
            </a>
            <a href="">
            <Card2 imageSrc={"../public/img.jpg"}/>
            </a>
            <a href="">
            <Card2 imageSrc={"../public/img.jpg"}/>
            </a>
            <a href="">
            <Card2 imageSrc={"../public/img.jpg"}/>
            </a>
            

            </div>





            <form onSubmit={(e) => handleSubmit(e)}>
            <input type="number" value={rating} placeholder='Enter Email'
             onChange={(e) => setRating(e.target.value)} />

            <button type="submit" onClick={(e) => handleSubmit(e)}>Sign up</button> 
            </form>
        </div>
    );
}

export default Home;
