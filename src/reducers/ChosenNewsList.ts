import { Category, ActionNewsList } from '../actions'
import { News } from '../entities/News'

export type State = News[]

export function chosenNewsList(state: News[] = [], action: ActionNewsList) {
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