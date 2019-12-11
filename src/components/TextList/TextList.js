import React from 'react';

import TextItem from '../TextItem';
import './TextList.css';
import dataText from './data';

const TextList = (props) => {

    return (
        <div className='text-list'>
            <div className='text-list-container'>
               <TextItem dataText={dataText[0]} />
               <TextItem dataText={dataText[1]} />
               <TextItem dataText={dataText[2]} />
               <TextItem dataText={dataText[3]} />
            </div>
            <div className='text-list-container'>
               <TextItem dataText={dataText[4]} />
               <TextItem dataText={dataText[5]} />
               <TextItem dataText={dataText[6]} />
               <TextItem dataText={dataText[7]} />
            </div>
        </div>
    )
}

export default TextList
