import React from "react";

export const TextBox = () => {

    let style = {
        background: '#FFFFFF',
        border: '3px solid #000000',
        boxSizing: 'border-box',
        width: '100%',
        height: '280px',
        padding: '40px',
        color: 'black'
    };

    return(
        <div style={style}>
            <span style={{ fontSize: '4vw' }}>
                THIS IS BLANK TEXT BOX
            </span>
        </div>
    );
}