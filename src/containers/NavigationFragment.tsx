import * as React from 'react'
import { connect } from 'react-redux'

import { ReducerState } from '../reducers'
import { fetchNewsItems, FetchNewsItems, Category } from '../actions'

interface NavigationProps {
    action: String
    fetchNewsItems: FetchNewsItems
}

class Navigation extends React.Component<NavigationProps, {}> {
    async componentWillMount() {
        this.props.fetchNewsItems(this.props.action)
    }

    fetchBasedOnCategory(category: Category) {
        this.props.fetchNewsItems(category)
    }

    render() {
        return(
            <div>
                <ul>
                    <li key = '1' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_SAVED_NEWS)}>
                        Saved News
                    </li>
                    <li key = '2' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_TOP_NEWS)}>
                        Top News
                    </li>
                    <li key = '3' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_RECENT_NEWS)}>
                        Recent News
                    </li>
                    <li key = '4' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_ASK_HN)}>
                        Ask HN
                    </li>
                    <li key = '5' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_SHOW_HN)}>
                        Show HN
                    </li>
                    <li key = '6' onClick = {() => this.fetchBasedOnCategory(Category.FETCH_HN_JOBS)}>
                        HN JOBS
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        action: state.action
    }
}

export default connect(mapStateToProps, { fetchNewsItems }) (Navigation)

