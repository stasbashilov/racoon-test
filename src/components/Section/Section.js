import React from 'react';

import './Section.css';

import Title from '../Title';
import TextList from '../TextList';
import SearchForm from '../SearchForm';
import Tags from '../Tags';

const Section = (props) => {

    const isSearch = props.isSearch;
    const isText = props.isText;
    const isTags = props.isTags;

    if(isSearch){
        return (
            <div className='section'>
                <SearchForm />
            </div>
        )
    }

    if(isTags){
        return (
            <div className='section section-relative'>
                <Tags />
            </div>
        )
    }

    if(isText) {
        return (
            <div className='section section-alt'>
                <Title />
                <TextList />
            </div>
        )
    } 
}

export default Section
