import * as React from 'react'
import { connect } from 'react-redux'

import { News } from '../entities/News'
import { newsItem } from '../components/NewsItem'
import { ReducerState } from '../reducers'

interface NewsListProps {
    newsList: News[]
}

class NewsList extends React.Component<NewsListProps, {}> {
    renderList() {
        return this.props.newsList.map((news) => {
            return (
                <li key = {news.id}>
                    { news.title }
                </li>
            )
        })
    }

    render() {
        if (!this.props.newsList) {
            return (
                <div>Loading...</div>
            )
        }

        console.log("masuk render")

        return (
            <ul>{this.renderList()}</ul>
        )
    }
}

function mapStateToProps(state: ReducerState): NewsListProps {
    return {
        newsList: state.newsList
    }
}

export default connect(mapStateToProps)(NewsList)