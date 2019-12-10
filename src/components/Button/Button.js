import React from 'react';

import './Button.css';

const Button = (props) => <button className='btn'>
    {props.innerText}
</button>

export default Button;