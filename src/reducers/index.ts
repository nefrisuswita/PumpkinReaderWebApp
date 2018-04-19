import { combineReducers } from 'redux'
import { chosenNewsList, State } from './ChosenNewsList' 

export const rootReducer = combineReducers({
    newsList: chosenNewsList
})

export interface ReducerState {
    newsList: State
}