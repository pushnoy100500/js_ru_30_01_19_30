import React, {Component, PropTypes} from 'react';
import Article from './Article';
import AccordionDecorator from '../decorators/accordionDecorator';

class ArticleList extends Component {

    render() {
        const {articles, toggleOpenArticle, openArticleId} = this.props;
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                toggleOpen={toggleOpenArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    };
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

ArticleList.defaultProps = {
    articles: []
};

export default AccordionDecorator(ArticleList);