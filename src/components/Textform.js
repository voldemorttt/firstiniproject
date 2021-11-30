import React, { useState } from 'react';
import propTypes from 'prop-types'
import './textform.css';

export default function Textform(props) {

    const handleUpclick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const clearonclick = () =>{
        setText("")
    }
    const handleOnChange=(event) =>{
        setText(event.target.value);
    }
    const handleextraspace= () =>{
        let newtext = text.replace(/\s\s+/g, ' ');
        setText(newtext)
    }
    const [text , setText] = useState('');

    
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'black'}} >
            <h2>{props.heading}  </h2>
            <div className="mb-3"> 
            <textarea className="form-control" placeholder="Enter Your Text" value={text} style={{backgroundColor:props.mode==='dark'?'#1d294b':'white' ,color:props.mode==='dark'?'white':'grey'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>

            <button disabled={text.length===0}   className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleUpclick}  >Convert to Uppercase</button>  
            <button disabled={text.length===0}  className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleLoclick} >Convert to Lowercase</button>  
            <button disabled={text.length===0}  className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={clearonclick} >Clear</button>  
            <button disabled={text.length===0}  className={`btn btn-${props.mode==='light'?'primary':'warning'} mx-2 my-2`} onClick={handleextraspace} >Remove Extra Space</button>  
        </div> 

        <div className="continer mx-2 " style={{color: props.mode==='dark'?'white':'black'}} >
            <br />
            <h3>Your Text Here</h3>
            <p> {text.split(" ").filter((element) =>{return element.length !==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length !==0}) .length} Minutes Read </p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
