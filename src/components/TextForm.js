import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("Your text should be here");
  const handleOnChange = (event) => {
    // console.log("Handle On Change")
    setText(event.target.value);
  };
  const clickedUpperClass = () => {
    // console.log("Clicked Upper Case")
    // setText(text)
    let newtxt = text.toUpperCase();
    setText(newtxt);
    props.alertfunction("Convert To Upper Case" , "success")
  };
  const clickedLowerClass = () => {
    let newtxt = text.toLowerCase();
    setText(newtxt);
    props.alertfunction("Convert To Lower Case" , "success")
  };
  const clearcall = () => {
    let newtxt = "";
    setText(newtxt);
    props.alertfunction("Text Cleared" , "success")
  };
  const copycall = () => {
    
    navigator.clipboard.writeText(text);
    props.alertfunction("Copied To Clipboard" , "success")
  };
  const removeExtraSpaces = () => {
    let newtxt2 = text.split(/[ ]+/);
    setText(newtxt2.join(" "));
    props.alertfunction("Removed Extra Spaces" , "success")
  };

  return (
    <>
      <div>
        <div className="container my-4"  style={{color : props.mode === "light" ? "black" : "white"}}>
          <h1>{props.title}</h1>
          <div className="form-group">
            <textarea style={{color : props.mode === "light" ? "black" : "white" , backgroundColor: props.mode === "light" ? "white" : "#09335c" }}
              id="textArea"
              className="form-control" onChange={handleOnChange} value={text} rows="8" >
            </textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={clickedUpperClass}>
            Convert To Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={clickedLowerClass}>
            Convert To Lowecase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={clearcall}>
            Clear Your Text
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copycall}>
            Copy Your Text
          </button>
          <button disabled={text.length===0}  className="btn btn-success mx-2 my-2" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container"  style={{color : props.mode === "light" ? "black" : "white"}}>
        <h2>Text Summary</h2>
        <p>
          Your Text Have {text.split(/\s+/).filter((element)=>{return element.length !==0 }).length} Words and {text.length}{" "}
          Letters{" "}
        </p>
        <p>Your reading time is {0.008 * text.split(" ").filter((element)=>{return element.length !==0 }).length} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Your Text To Preview here"}</p>
      </div>
    </>
  );
}
