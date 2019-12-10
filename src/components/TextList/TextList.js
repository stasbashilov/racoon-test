import React from 'react';

import TextItem from '../TextItem';
import './TextList.css';
import dataText from './data';

const TextList = (props) => {

    return (
        <div className='text-list'>
            {dataText.map((dataText, index) => 
               <TextItem key={index} dataText={dataText} />
            )}
        </div>
    )
}

export default TextList
