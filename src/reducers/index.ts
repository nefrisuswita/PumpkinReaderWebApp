import { combineReducers } from 'redux'
import { categoryNewsList, savedNews, newsDetail } from './News' 
import { chosenCategory } from './Category'
import { News } from '../entities/News'

export const rootReducer = combineReducers({
    action: chosenCategory,
    newsList: categoryNewsList,
    savedNews: savedNews,
    newsDetail: newsDetail
})

export interface ReducerState {
    action: String, 
    newsList: News[],
    savedNews: News[],
    newsDetail: News
}