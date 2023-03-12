import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/create2.scss";

export default function CreateArtical() {
  const history = useNavigate()
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty());
  const [articalType, setArticalType] = useState("")
  const [creatorName, setCreatorName] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tag1, setTag1] = useState("")
  const [tag2, setTag2] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [register, setRegister] = useState(false);
  let d = new Date();
  let month = d.toLocaleString('default', { month: 'long' });
  let year = d.getFullYear();
  let day = d.getDate();
  const date = month + " " + day + "," + year;

 


  


  useEffect(() => {
    setContent(editorState.getCurrentContent().getPlainText())
    console.log(editorState.getCurrentContent().getPlainText());
  }, [editorState]);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    const configuration = {
      method: "post",
      url: "https://myservice-5ysh.onrender.com/createart",
      data: {
        articalType,
        creatorName,
        date,
        title,
        content,
        tag1,
        tag2,
        imgUrl
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        history("/homepage")

      })
      .catch((error) => {
        console.log(error);
      });





  }




  return (
    
    <div className="page">
      <div className="title">
        <h1>Create an article</h1>
      </div>

      <div className="filds">
        <div className="myform">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label> Type of the article </label>
          <select name="selectedFruit"
            value={articalType} onChange={(e) => setArticalType(e.target.value)} >
            <option value="none">None</option>
            <option value="media">Media</option>
            <option value="sports">Sports</option>
            <option value="environment">Environment</option>
            <option value="politics">Politics and Governance</option>
          </select>
          <label> Authors Name </label>
          <input type="text" value={creatorName} placeholder="authors Name" onChange={(e) => setCreatorName(e.target.value)} />
          <label> Title of the article </label>
          <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
          <label> tag 1 </label>
          <input type="text" value={tag1} placeholder="tag1" onChange={(e) => setTag1(e.target.value)} />
          <label> tag 2 </label>
          <input type="text" value={tag2} placeholder="tag2" onChange={(e) => setTag2(e.target.value)} />
          <label> Image Url </label>
          <input type="text" value={imgUrl} placeholder="image url" onChange={(e) => setImgUrl(e.target.value)} />
          <button type="submit" onClick={(e) => handleSubmit(e)}>Publish</button>


        </form>
        </div>
        <div className="edit" style={{ border: "1px solid black", padding: '20px' ,minHeight: '300px', maxWidth: '700px' }}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>


      </div>
    </div>

  );
}
