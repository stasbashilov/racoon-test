import React from 'react';

import './TextItem.css';

const TextItem = (props) => (
    <div className='text-item'>
        { !props.dataText.part ? (
            <span>
                <span className='text-item-number'>{props.dataText.number}.</span>
                <span>{props.dataText.content}</span>
            </span>
        ) : (
            <span>
                <span>{props.dataText.content}</span>
            </span>
        ) }
    </div>
)

export default TextItem
