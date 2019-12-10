import React from 'react';

import './Button.css';

const Button = (props) => {
    const className = 'btn';

    return (
        <button className={className}>
            {props.innerText}
        </button>
    )
}

export default Button;