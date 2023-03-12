import React from 'react';
import Card2 from "../components/Card2.jsx"
import { useLocation } from 'react-router-dom';
import "../styles/homepage.scss"
import { reactLocalStorage } from 'reactjs-localstorage';
import { useEffect, useState, useContext } from 'react';


const HomePage = () => {
    const location = useLocation();
    const [quote, setQuote] = useState("");
    const disUser = reactLocalStorage.get("thisUser")

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.quotable.io/random?maxLength=50')
            .then(response => response.json())
            .then(data => setQuote(data));

            
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log(quote)
    return (


        <div className='homepage'>
            <div className='header'>
                <div>
                <h1>Welcome to Nexus </h1>
                </div>
                <div>
                    <h2>{disUser}</h2>
                </div>
                
            </div>


            <div className="category" >
                <a href="/homepage/artarticals">
                    <Card2 className="cad" imageSrc={"../img/media.jpg"} />
                </a>

                <a href="/histarticals">
                    <Card2 className="cad" imageSrc={"../img/sports.jpg"} />
                </a>
                <a href="/sciencearticals">
                    <Card2 className="cad" imageSrc={"../img/env.jpg"} />
                </a>
                <a href="/homepage/envirarticals">
                    <Card2 className="cad" imageSrc={"../img/poli.jpg"} />
                </a>



            </div>
            <div className="quotes">
            {quote && <h3>{quote.content}</h3> }
            {quote && <p> --{quote.author}--</p> }
            </div>
        </div>
    );
}

export default HomePage;
