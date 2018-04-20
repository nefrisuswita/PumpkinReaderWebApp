import { combineReducers } from 'redux'
import { chosenNewsList, State } from './ChosenNewsList' 
import { chosenCategory } from './SelectedCategory'

export const rootReducer = combineReducers({
    action: chosenCategory,
    newsList: chosenNewsList
})

export interface ReducerState {
    action: String 
    newsList: State
}