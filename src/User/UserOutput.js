import React from 'react';
import './UserOutput.css';

const output = params => {
    return (
        <div className = "UserOutput">
            <p>My name is {params.name}</p>
            <p>Paragraph 2</p>
        </div>
    );

}

export default output; 