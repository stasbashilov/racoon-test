import React from 'react';

import './TextItem.css';

const TextItem = (props) => (
    <div className='text-item'>
        <span className={props.dataText.number ? 'text-item-number' : ''}>{props.dataText.number ? props.dataText.number + '.' : null }</span>
        <span>{props.dataText.content}</span>
    </div>
)

export default TextItem
