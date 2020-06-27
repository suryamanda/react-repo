import React from 'react';

const ValidationComp = props => {
    
    let output1 = null;

    if (props.lengthOfInput > 5)
    {
        output1 = 'Text is long enough'
    } else {
        output1 = 'Text is too short'
    }

    return (
        <div>
        <p>{output1}</p>                
        </div>
    );
}

export default ValidationComp