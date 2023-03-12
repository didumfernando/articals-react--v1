import React from 'react';
import '../styles/land.scss';
const Land = () => {
    return (
        <div className='landPage'>
            <h1>Stay Curious</h1>
            <h2>Discover GP Articles about a myriad of topics</h2>
            <a href="/log">
            <button className='startReadButton' > Start Reading</button>
            </a>
            
        </div>
    );
}

export default Land;
