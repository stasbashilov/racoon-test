import React from 'react';

import { images } from './data';
import './Logo.css';

const Logo = (props) => (
    <div className='logo'>{images.find(item => item.type === 'logo' ).img()}</div>
)

export default Logo;
