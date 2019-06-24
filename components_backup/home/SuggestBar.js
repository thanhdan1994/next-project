import Link from 'next/link'
import React, { Component } from 'react'

class SuggestBar extends Component {
    render() {
        const { lists } = this.props;
        if (lists) {
            return (
                <div className="suggest-bar">
                    <ul className="subMenu-bottom">
                        <li><a title="Breaking news" className="icon-direction"> </a></li>
                        {lists.map((item, index) => (
                            <li key={index}><a href={item.tag_link} title={item.tag_name}>{item.tag_name}</a></li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}
export default SuggestBar