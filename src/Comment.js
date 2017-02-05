import React, {Component} from 'react'

export default class Comment extends Component {

    render() {
        let {author, text} = this.props;
        return <li>
            <span>Written by: {author}</span>
            <p>{text}</p>
        </li>;
    }

}