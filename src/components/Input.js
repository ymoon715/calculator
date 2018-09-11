import React from 'react';
import './Input.css'

const inputScreen = (props) => {
    return (
        <div className="Input">
            {props.input}
        </div>
    )
}

export default inputScreen;