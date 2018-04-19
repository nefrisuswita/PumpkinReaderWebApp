import * as React from 'react'
import { News } from '../entities/News'

export const newsItem = (news: News) => (
    <li>
        <div>
            {news.title}
        </div>
    </li>    
)