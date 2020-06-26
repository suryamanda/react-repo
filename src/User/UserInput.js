import React from 'react';
const userInput = params => {

    const inputStyle = {
        border : '2px solid red'
    };
    return (
        <div>
            <input type="text" style = {inputStyle} onChange = {params.changed} value = {params.name}/>
        </div>
    );

}

export default userInput; 