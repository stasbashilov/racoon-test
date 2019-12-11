import React from 'react';

import Section from '../Section';
import Logo from '../Logo';

import Title from '../Title';
import TextList from '../TextList';
import SearchForm from '../SearchForm';
import Tags from '../Tags';

import './Layout.css';

const Layout = () => (
    <div className='layout'>
        <div className='layout-inner'>
            <Logo />
            <Section>
                <SearchForm />
                <SearchForm />
            </Section>
            <Section flex={true}>
                <Tags />
            </Section>
            <Section alt={true}>
                <Title
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <TextList />
            </Section>
        </div>
    </div>
)

export default Layout
