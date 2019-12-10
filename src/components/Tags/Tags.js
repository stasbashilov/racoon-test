import React from 'react';

import tagList from './data';
import Tag from '../Tag';

import './Tags.css';

const DEFAULT_ACTIVE_ID = 1

const Burger = (props) => (
    <div className={props.className} onClick={props.onClick}>
        <div>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        <div>{props.name}</div>
    </div>);

class Tags extends React.Component {
    state = {
        activeClass: false,
        activeId: DEFAULT_ACTIVE_ID
    }

    handleCheck = id =>
        this.setState({
            activeId: id,
        });

    handleUncheck = () => this.setState({ activeId: null });
    handleOpenMenu = () => this.setState({ activeClass: !this.state.activeClass });

    render() {
        const name = tagList.find(i => i.id === this.state.activeId).name;

        return (
            <React.Fragment>
                <Burger className={`hamburger ${this.state.activeClass ? 'hidden' : ' '}`} onClick={this.handleOpenMenu} name={name} />
                <ul className={`tags-list ${this.state.activeClass ? 'mobile' : ' '}`}>
                    {tagList.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                name={item.name}
                                className={this.state.activeId === item.id ? 'tag-item active' : 'tag-item'}
                                onClick={() => {
                                    this.state.activeId === item.id ? this.handleUncheck() : this.handleCheck(item.id)
                                }}
                            />
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Tags;
