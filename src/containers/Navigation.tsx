import * as React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'

import { ReducerState } from '../reducers'
import { fetchNewsList, Category } from '../actions'
import { browserHistory } from '../browserHistory'

interface NavigationProps {
    fetchNewsList: typeof fetchNewsList
}

class Navigation extends React.Component<NavigationProps, {}> {
    async componentWillMount() {
        this.props.fetchNewsList()
    }

    fetchBasedOnCategory(category: Category) {
        this.props.fetchNewsList(category)
    }

    render() {
        return(
            <div style={{ float: 'left', width: '20%' }}>
                <List>
                    <MenuItem onClick = {() => browserHistory.push('/saved')}>Saved News</MenuItem>
                    <MenuItem onClick = {() => this.fetchBasedOnCategory(Category.FETCH_TOP_NEWS)}>Top News</MenuItem>
                    <MenuItem onClick = {() => this.fetchBasedOnCategory(Category.FETCH_RECENT_NEWS)}>Recent News</MenuItem>
                    <MenuItem onClick = {() => this.fetchBasedOnCategory(Category.FETCH_ASK_HN)}>Ask HN</MenuItem>
                    <MenuItem onClick = {() => this.fetchBasedOnCategory(Category.FETCH_SHOW_HN)}>Show HN</MenuItem>
                    <MenuItem onClick = {() => this.fetchBasedOnCategory(Category.FETCH_HN_JOBS)}>HN JOBS</MenuItem>
                </List>
            </div>
        )
    }
}

export default connect(null, { fetchNewsList }) (Navigation)

