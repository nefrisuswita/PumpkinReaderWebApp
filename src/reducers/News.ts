import { Category, ActionNewsList, SavedListMoves, ActionSavedNews, ActionNewsDetail, NewsDetailMoves } from '../actions'
import { News } from '../entities/News'
import { Comment } from '../entities/Comment'

export function categoryNewsList(state: News[] = [], action: ActionNewsList) {
    switch(action.type) {
        case Category.FETCH_SAVED_NEWS:
        case Category.FETCH_TOP_NEWS:
        case Category.FETCH_RECENT_NEWS:
        case Category.FETCH_ASK_HN:
        case Category.FETCH_SHOW_HN:
        case Category.FETCH_HN_JOBS:
            return action.newsList
        default:
            return state    
    }
}

export function savedNews(state: News[] = [], action: ActionSavedNews) {
    switch(action.type) {
        case SavedListMoves.ADD_SAVED_LIST:
            return [...state, action.news]
        case SavedListMoves.REMOVE_SAVED_LIST:
            return state.filter(news => news.id != action.news.id)
        default:
            return state        
    }
}

export interface NewsDetail {
    news: News 
    comment: Comment[]
}

export function newsDetail(state: NewsDetail = { news: null, comment: null}, action: ActionNewsDetail) {
    switch(action.type) {
        case NewsDetailMoves.PUT_NEWS_DETAIL:
            return {...state, news: action.news}
        case NewsDetailMoves.FETCH_NEWS_COMMENT:
            return {...state, comment: action.comment}
        default:
            return state
    }
}

