import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import Select from 'react-select'
import DateRange from './DateRange'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'
import {ChangeDropdownSelection} from '../AC/index'

class App extends Component {
    state = {
        user: '',
        selection: null
    }

    componentWillReceiveProps = (nextProps) => {
       // console.log(nextProps)
    }

    render() {
        const {articles, dropdown} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter/>
                User: <input type="text" value={this.state.user} onChange={this.handleUserChange}/>
                <Select options = {options} onChange={this.handleSelectChange} value={dropdown} multi/>
                <DateRange />
                <ArticleList articles={this.getArticles()}/>
                <Chart articles={articles}/>
            </div>
        )
    }

    handleSelectChange = selection => {
        this.props.ChangeDropdownSelection(selection)
    }

    handleUserChange = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                user: ev.target.value
            })
        }
    }

    getArticles = () => {
        let {articles, dropdown, dateRange} = this.props;
        if(dropdown.length && dropdown.length > 0 && articles.length > 0) {
            dropdown = dropdown.map((item) => {
                return item.value;
            })
            articles = articles.filter((article) => {
                let result = false;
                if(dropdown.indexOf(article.id) >= 0) {
                    result = true;
                }
                if(dateRange && dateRange.from && dateRange.to) {
                    let articleTime = (new Date(article.date)).getTime();
                    result = articleTime >= dateRange.from.getTime() && articleTime <= dateRange.to.getTime();
                }
                return result;
            })
        }
        return articles;
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    dropdown: state.dropdown,
    dateRange: state.dateRange
}), { ChangeDropdownSelection } )(App)