import React from 'react';
import '../styles/card.scss';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Card = ({ title, content, date, tag1, tag2, author, imgUrl }) => {



    return (
        <div className='bigCard'>

            <div className="card">

                <img src={imgUrl} alt="../img/img.jpg" />

                <div className='info'>
                    <div className='written'>
                        <img src="../img/pen.png" alt="" />
                        <p>by {author} </p>
                    </div>
                    <h3>{title}</h3>
                    <h6>{date}</h6>
                    <p>{content}</p>
                    <div className='tags'>
                    {tag1!=null && <span>{tag1}</span>}
                    {tag2!=null && <span>{tag2}</span>}    
                       
                    </div>
                </div>

            </div>

        </div>
    );

};

export default Card;