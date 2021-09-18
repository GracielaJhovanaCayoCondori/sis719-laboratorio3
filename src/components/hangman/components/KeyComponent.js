import React from 'react';

export const KeyComponent = ({letter, handlerKey, status}) => {
    return (
    <div
    className= {status ? "disablediv": ("")} 
     onClick={() => {
        handlerKey(letter);
    }}
    >
    {letter}
    </div>
    );
};


