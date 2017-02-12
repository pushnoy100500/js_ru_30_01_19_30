import React from 'react';

export default (Component) => class AccordionComponent extends React.Component {
    state = {
        openArticleId: null
    };

    toggleOpenArticle = articleId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        let newOpen = articleId;
        if(articleId === this.state.openArticleId) {
            newOpen = null;
        }
        this.setState({
            openArticleId: newOpen
        })
    };

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}
