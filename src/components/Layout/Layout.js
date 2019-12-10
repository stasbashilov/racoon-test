import React from 'react';

import Section from '../Section';
import Logo from '../Logo';

import './Layout.css';

const Layout = () => (
    <div className='layout'>
        <div className='layout-inner'>
            <Logo />
            <Section isSearch={true} />
            <Section isTags={true} />
            <Section isText={true} />
        </div>
    </div>
)

export default Layout
