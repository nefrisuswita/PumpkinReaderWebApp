import * as React from 'react'
import List from 'material-ui/List/List'

import { putNewsDetail } from '../actions'

import { News } from '../entities/News'
import { NewsItem } from './NewsItem'

export interface Props {
    newsList: News[],
    putNewsDetail: typeof putNewsDetail
}

export const NewsList = (props: Props) => {
    if (!props.newsList) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div style={{ float: 'left', width: '80%', paddingLeft: '20px' }}>
            <List>{renderList(props)}</List>
        </div>    
    )
}

const renderList = (props: Props) => props.newsList.map((news) => (
    <NewsItem key={news.id} news={news} putNewsDetail={props.putNewsDetail} />
))