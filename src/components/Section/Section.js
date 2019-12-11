import React from 'react';

import './Section.css';

const Section = (props) => (
    <div className={`section ${props.flex ? 'section-flex': ''} ${props.alt ? 'section-alt': ''}`}>
        {props.children}
    </div>
)

export default Section;
