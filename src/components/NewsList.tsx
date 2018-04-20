import * as React from 'react'

import { News } from '../entities/News'

export interface NewsListProps {
    newsList: News[]
}


export class NewsList extends React.Component<NewsListProps, {}> {
    renderList() {
        return this.props.newsList.map((news) => {
            console.log('masuk judul ' + news.title)
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

        return (
            <ul>{this.renderList()}</ul>
        )
    }
}