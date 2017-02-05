import React, {Component} from 'react'
import Comment from './Comment.js'

export default class CommentList extends Component {

    constructor(props) {
        super();
        this.comments = props.comments;
        this.state = {
            isOpen: false
        }
    }

    getComments() {
        if (this.state.isOpen) {
            return this.comments.map((comment) => {
                return <Comment author={comment.user} text={comment.text} key={comment.id}/>
            })
        }
        return null;
    }

    showHide = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <div>
                   <button onClick={this.showHide}>{this.state.isOpen ? 'Hide' : 'Open'} Comments</button>
                    <ul>{this.getComments()}</ul>
               </div>
    }
}