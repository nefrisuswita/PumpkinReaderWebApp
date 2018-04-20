import { SavedListMoves, ActionSavedNews } from '../actions'
import { News } from '../entities/News'

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