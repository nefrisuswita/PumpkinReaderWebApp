import { combineReducers } from 'redux'
import { chosenNewsList, State } from './ChosenNewsList' 
import { chosenCategory } from './SelectedCategory'
import { savedNews } from './SavedNews'
import { News } from '../entities/News'

export const rootReducer = combineReducers({
    action: chosenCategory,
    newsList: chosenNewsList,
    savedNews: savedNews
})

export interface ReducerState {
    action: String, 
    newsList: State,
    savedNews: News[]
}