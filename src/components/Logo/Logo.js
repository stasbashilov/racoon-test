import React from 'react';

import { images } from './data';
import './Logo.css';

const Logo = (props) => (
    <div className='logo'>{images.find(img => img.type ).img()}</div>
)

export default Logo