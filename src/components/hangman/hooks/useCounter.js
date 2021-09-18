import React, { useState } from 'react';

export const useCounter = (initCounter, {max, min}) => {
    const [counter, setCounter] = useState(initCounter );
    const incrementCounter = (step =1) => {
        if (counter < max) {
            setCounter(counter + step);
            
        };
    };
    const decrementCounter =  (step =1) => {
        if (counter > min) {
            setCounter(counter - step);
        };
        
        
        
        
    };
    
        
        
        
        
    
    
    const resetCounter = () => {
        setCounter(initCounter);
    };
    return [counter, incrementCounter, decrementCounter, resetCounter];
};        
    
