import React from 'react';

import tagList from './data';
import Tag from '../Tag';

import './Tags.css';

const Burger = (props) => (
    <div className="hamburger" onClick={props.onClick}>
        <div>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        <div>{props.name}</div>
    </div>);

class Tags extends React.Component {

    constructor() {
        super()
    
        this.state = {
          activeClass: false,
          activeId: null 
        }
    }

    handleCheck = id => 
        this.setState({
            activeId: id,
        });
    

    handleUncheck = () => this.setState({activeId: null});

    handleOpenMenu = () => this.setState({activeClass: !this.state.activeClass});

    render () {
        let name = '';
        
         if (this.state.activeId === 1){
            name = tagList[0].name;
        } else if(this.state.activeId === 2) {
            name = tagList[1].name
        } else if(this.state.activeId === 3) 
            name = tagList[2].name

        return (
            <div>
                <Burger onClick={this.handleOpenMenu} name={name} />
                <ul className={`tags-list ${this.state.activeClass ? 'active ' : ' ' }`}>
                    {tagList.map((item, index) => {
                    return (
                            <Tag 
                                key={index} 
                                name={item.name}
                                className={this.state.activeId ===item.id ? 'tag-item active' : 'tag-item'}
                                onClick={()=>{
                                this.state.activeId === item.id ? this.handleUncheck() : this.handleCheck(item.id)
                                }}
                            />
                    )})}
                </ul>
            </div>
        )
    }
}

export default Tags;
