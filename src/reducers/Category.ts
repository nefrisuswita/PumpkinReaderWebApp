import { Category, ActionCategory } from '../actions'
import { News } from '../entities/News'

export function chosenCategory(state: String = Category.FETCH_TOP_NEWS, action: ActionCategory) {
    switch(action.type) {
        case Category.FETCH_SAVED_NEWS:
        case Category.FETCH_TOP_NEWS:
        case Category.FETCH_RECENT_NEWS:
        case Category.FETCH_ASK_HN:
        case Category.FETCH_SHOW_HN:
        case Category.FETCH_HN_JOBS:
            return action.type
        default:
            return state    
    }
}