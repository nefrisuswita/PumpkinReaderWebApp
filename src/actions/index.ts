import { ThunkAction } from 'redux-thunk'

import { ReducerState } from '../reducers'
import { News } from '../entities/News'
import { newsItem } from '../components/NewsItem';

export enum Category {
    FETCH_SAVED_NEWS = 'FETCH_SAVED_NEWS',
    FETCH_TOP_NEWS = 'FETCH_TOP_NEWS',
    FETCH_RECENT_NEWS = 'FETCH_RECENT_NEWS',
    FETCH_ASK_HN = 'FETCH_ASK_HN',
    FETCH_SHOW_HN = 'FETCH_SHOW_HN',
    FETCH_HN_JOBS = 'FETCH_HN_JOBS'
} 

export interface ActionNewsList {
    type: Category
    newsList: News[]
}

export interface ActionCategory {
    type: Category
}

export interface FetchNewsItems {
    (category: String) : ThunkAction<void, ReducerState, any>
}

function receiveNewsList(category: Category, newsList: News[]): ActionNewsList {
    return {
        type: category,
        newsList: newsList
    }
}

export function fetchSavedNews() {
    const newsList: News[] = []
    return {
        type: Category.FETCH_SAVED_NEWS,
        newsList: newsList
    }
}

export function fetchNewsItems(category: Category): ThunkAction<void, ReducerState, any> {
    let apiCategory = 'topstories'
    switch(category) {
        case Category.FETCH_RECENT_NEWS:
            apiCategory = 'newstories'
            break
        case Category.FETCH_ASK_HN:
            apiCategory = 'askstories'
            break
        case Category.FETCH_SHOW_HN:
            apiCategory = 'showstories'
            break
        case Category.FETCH_HN_JOBS:
            apiCategory = 'jobstories'
            break
    }

    return (dispatch) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/${apiCategory}.json`)
        .then(response => response.json())
        .then(ids => {
            console.log("masuk done fetch top")
            return Promise.all<News>(ids.slice(0,10).map(
                (id: String) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(response => response.json())
                    .then(response => new News(response.url, response.title, response.id))
                })
            )
        })
        .then(newsItems => dispatch(receiveNewsList(category, newsItems)))
        .catch(err => dispatch({ type: 'SOME_ERROR', err }))
    }
}

// export function chose