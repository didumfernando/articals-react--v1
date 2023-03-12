import React from 'react';
import "../styles/artical.scss";


const Artical = ({id,title,creatorName,date}) => {

    
        
        
    

    return (
        <div className='container'>
            <div>
            <p>{id}</p>
            </div>
            <div><p>{title}</p></div>
            <div><p>{creatorName}</p></div>
            <div><p>{date}</p></div>
            
        </div>
    );
}

export default Artical;
