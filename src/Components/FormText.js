import { useState } from "react"
import React from 'react'

export default function FormText(props) {
    const [text, setText] = useState("");
    let handleUpperCaseClick = () => {
        setText(text.toUpperCase());
        props.handleAlert("Converted to upper case","success")
    }
    let handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.handleAlert("Converted to lower case","success")
    }
    let handleClearTextClick = () => {
        setText("");
        props.handleAlert("Text has been cleared","success")
    }
    let handleCopyTestClick = () => {
        let selectText = document.getElementById("mybox");
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
        props.handleAlert("Text has been coppied","success")
    }
    let handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.handleAlert("Extra spaces have been removed","success")
    }
    let handleOnChange = (event) => {
        setText(event.target.value);
    }
     


    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <div className="mb-3 my-4">
                    <textarea
                        style={{backgroundColor: props.mode === "dark"?"gray":"white"}}
                        className="form-control"
                        id="mybox"
                        value={text}
                        placeholder="Enter text here"
                        onChange={handleOnChange}
                        rows="10"></textarea>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleClearTextClick}>
                    clear text
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleUpperCaseClick}>
                    convert to uppercase
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleLowerCaseClick}>
                    convert to lowercase
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleCopyTestClick}>
                    copy Text
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleExtraSpaceClick}>
                        Remove Extra Space
                </button>
            </div>
            <div className="container my-3">
                <h3>Your text Summry</h3>
                <p>{text.split(" ").length - 1} words,
                    {text.length} characters, 
                    {text.split(".").length - 1} statements,  
                    {text.split("?").length - 1} questions,
                    {text.split("!").length - 1} exclamations.
                </p>
                <p>
                    It will take {0.08 * text.split(" ").length} Minutes to read
                </p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
