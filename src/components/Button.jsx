import React from 'react';

const Button = ({ changeQuote, colors, colorRandom }) => {
    return (
        <button onClick={changeQuote} style={{ background: colors[colorRandom] }}>
         <i className="fa-solid fa-greater-than"></i>
        </button>   
    );
};

export default Button;