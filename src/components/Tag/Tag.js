import React from 'react';

import './Tag.css';

class Tag extends React.Component {

    render () {
        return (
            <li 
                className={this.props.className} 
                onClick={this.props.onClick} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='svg-icon'><path fill="none" d="M0 0h24v24H0V0z"/><path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/></svg>
                <span>{this.props.name}</span>
            </li>
        )
    }

}

export default Tag;
