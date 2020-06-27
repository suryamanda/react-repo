import React from 'react';

const CharComp = props => {

    let inlineStyle = {
        display : "inline-block",
        padding : "16px",
        textAlign : "center",
        margin : "16px",
        border: "1px solid black"
    }
   
    return (
        <div style = {inlineStyle} onClick = {props.clicked}>
            <p>{props.char1}</p>
        </div>
    );
}

export default CharComp