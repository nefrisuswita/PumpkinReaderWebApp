import { ThunkAction } from 'redux-thunk'

import { ReducerState } from '../reducers'
import { News } from '../entities/News'
import { Comment } from '../entities/Comment'
import { newsItem } from '../components/NewsItem'
import { newsDetail } from '../reducers/News'

export enum Category {
    FETCH_SAVED_NEWS = 'FETCH_SAVED_NEWS',
    FETCH_TOP_NEWS = 'FETCH_TOP_NEWS',
    FETCH_RECENT_NEWS = 'FETCH_RECENT_NEWS',
    FETCH_ASK_HN = 'FETCH_ASK_HN',
    FETCH_SHOW_HN = 'FETCH_SHOW_HN',
    FETCH_HN_JOBS = 'FETCH_HN_JOBS'
} 

export enum SavedListMoves {
    ADD_SAVED_LIST = 'ADD_SAVED_LIST',
    REMOVE_SAVED_LIST = 'REMOVE_SAVED_LIST' 
}

export enum NewsDetailMoves {
    PUT_NEWS_DETAIL = 'PUT_NEWS_DETAIL',
    FETCH_NEWS_COMMENT = 'FETCH_NEWS_COMMENT'
}

export interface ActionCategory {
    type: Category
}

export interface ActionNewsList {
    type: Category
    newsList: News[]
}

export interface ActionSavedNews {
    type: SavedListMoves
    news: News
}

export interface ActionNewsDetail {
    type: NewsDetailMoves
    news: News
    comment: Comment[]
}

export interface FetchNewsList {
    (category: String) : ThunkAction<void, ReducerState, any>
}

export function fetchNewsList(category: Category): ThunkAction<void, ReducerState, any> {
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
            return Promise.all<News>(ids.slice(0,10).map(
                (id: String) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(response => response.json())
                    .then(response => new News(response.id, response.title, response.by, 
                        response.kids, response.time,response.url))
                })
            )
        })
        .then(newsItems => dispatch(receiveNewsList(category, newsItems)))
        .catch(err => dispatch({ type: 'SOME_ERROR', err }))
    }
}

function receiveNewsList(category: Category, newsList: News[]): ActionNewsList {
    return {
        type: category,
        newsList: newsList
    }
}

export function putNewsDetail(news: News): ThunkAction<void, ReducerState, any> {
    return (dispatch) => {
        new Promise(() => {
            dispatch({ type: NewsDetailMoves.PUT_NEWS_DETAIL, news: news })

            return Promise.all<Comment>(news.commentId.map((id: number) => 
                getComment(id).then(commentLvl1 => 
                    Promise.all<Comment>(commentLvl1.comment.map(commentLvl2Id => 
                        getComment(commentLvl2Id.id)))
                    .then(commentLvl2List => {
                        const comment = new Comment(commentLvl1.id, commentLvl1.by, commentLvl2List, 
                            commentLvl1.text, commentLvl1.time)
                        return comment
                    }))))
                .then(commentLvl1List => 
                    dispatch({type: NewsDetailMoves.FETCH_NEWS_COMMENT, comment: commentLvl1List}))
        })
    }    
}

function getComment(id: number) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(response => {
            const commentIds: number[] = response.kids
            return new Comment(response.id, response.by, commentIds.map(id => Comment.getNewsById(id)), 
                response.text, response.time)
        })
} 
