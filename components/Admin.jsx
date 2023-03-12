import React from 'react';
import { useEffect, useState } from 'react';
import Artical from './Artical';
import axios from "axios";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useNavigate } from 'react-router-dom';
import "../styles/admin.scss";

const Admin = () => {
    const [articals, setArticals] = useState([])
    const [deleted, setDeleted] = useState([])
    const disUser = reactLocalStorage.get("thisUser")
    const history = useNavigate();

    const removeUser = (e) => {
        e.preventDefault();
        reactLocalStorage.clear();
        history("/log")
    }
    const handleSubmit = (e, id) => {
        e.preventDefault();
        axios.delete(`https://myservice-5ysh.onrender.com/deleteartical/${id}`).then((res) => {
            alert("deleted");
            getArticals();
        });

    };

    function getArticals() {
        fetch('https://myservice-5ysh.onrender.com/getarticals')
            .then(response => response.json())
            .then(data => {
                setArticals(data);

            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch('https://myservice-5ysh.onrender.com/getarticals')
            .then(response => response.json())
            .then(data => {
                setArticals(data);

            })
            .catch(error => console.error(error));

    }, []);
    console.log(articals);
    return (
        <div className='item'>
            <div className="title">
                <h2>admin page</h2>
                <div className="accInfo">
                    <h6>{disUser}</h6>
                    <a>
                        <button onClick={(e) => removeUser(e)}>log out</button>
                    </a>
                </div>
            </div>

            
            <div className="panel-body">
      <table id='customers'>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Type</th>
          
          
        </tr>
        {articals.map(artical => {
          return (
            <tr key={artical._id}>
              <td>{artical.title}</td>
              <td>{artical.creatorName}</td>
              <td>{artical.date}</td>
              <td>{artical.articalType}</td>
              <td><span type='button' onClick={(e) => handleSubmit(e, artical._id)}>delete</span></td>
            </tr>
          )
        })}
      </table>

      <div className="chat">
        
      </div>
    </div>


        </div>
    );
}

export default Admin;
