import { Category, ActionCategory } from '../actions'
import { News } from '../entities/News'

export function chosenCategory(state: String = Category.FETCH_TOP_NEWS, action: ActionCategory) {
    switch(action.type) {
        case Category.FETCH_SAVED_NEWS:
            console.log("masuk type" + Category.FETCH_SAVED_NEWS)
            return action.type
        case Category.FETCH_TOP_NEWS:
            console.log("masuk type" + Category.FETCH_TOP_NEWS)
            return action.type
        case Category.FETCH_RECENT_NEWS:
            console.log("masuk type" + Category.FETCH_RECENT_NEWS)
            return action.type
        case Category.FETCH_ASK_HN:
            console.log("masuk type" + Category.FETCH_ASK_HN)
            return action.type
        case Category.FETCH_SHOW_HN:
            console.log("masuk type" + Category.FETCH_SHOW_HN)
            return action.type
        case Category.FETCH_HN_JOBS:
            console.log("masuk type" + Category.FETCH_HN_JOBS)
            return action.type
        default:
            return state    
    }
}