import React, { useState } from 'react';
import './Textarea.css';

export default function TextArea() {
    const [text, setText] = useState("Write something here...");
    const [originalText, setOriginalText] = useState("Write something here...");
    const onClickUpHandle = () => {
        console.log("UpperCase Clicked")
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }

    const onChangeHandler = (event) => {
        console.log("On Change")
        console.log(event);
        setText(event.target.value);
        setOriginalText(event.target.value);
    }

    const onClickLowHandle = () => {
        console.log("LowerCase Clicked")
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }

    const onClickCountHandle = () => {
        console.log("Count Char Clicked")
        let newTxt = text.length.toString();
        setText(newTxt);
    }

    const onClickReverseHandle = () => {
        console.log("Count Char Clicked")
        let newTxt = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newTxt += text.charAt(i);
        }
        setText(newTxt);
    }

    const onClickOriginalHandle = () => {
        console.log("Show Original Text Clicked");
        setText(originalText);
    }


    return (
        <>
            <div className="container">
                <h2>Please Enter Text here</h2>
                <textarea value={text} onChange={onChangeHandler}
                    rows="8"></textarea>
                <div className="buttons">
                    <button onClick={onClickUpHandle}>Convert to UpperCase </button>
                    <button onClick={onClickLowHandle}>Convert to LowerCase </button>
                    <button onClick={onClickCountHandle}>Count Characters </button>
                    <button onClick={onClickReverseHandle} >Reverse Text </button>
                    <button onClick={onClickOriginalHandle} >Show Original Text </button>
                </div>
            </div>

            <div className="container2">
                <h2>Your Text Summary</h2>
                <p>Your text has {text.split(" ").length} and {text.length} Characters</p>
                <p>{0.08 * text.split(" ").length} time read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    );
}
