import * as React from 'react'
import MenuItem from 'material-ui/MenuItem'

import { News } from '../entities/News'
import { browserHistory } from '../browserHistory'
import { putNewsDetail } from '../actions'

interface Props {
    news: News, 
    putNewsDetail: typeof putNewsDetail
}

export const NewsItem = (props: Props) => (
    <div onClick={() => {
        props.putNewsDetail(props.news)
        browserHistory.push('/' + props.news.id)
        }}>
        {props.news.title}
    </div>
)

async function newsClick() {
    
} 