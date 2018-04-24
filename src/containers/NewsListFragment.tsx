import * as React from 'react'
import { connect } from 'react-redux'

import { NewsList, NewsListProps } from '../components/NewsList'
import { ReducerState } from '../reducers'
import Navigation from './NavigationFragment'

class NewsListFragment extends React.Component<NewsListProps, {}> {
    render() {
        return (
            <div>
                <Navigation />
                <NewsList newsList={this.props.newsList}/>
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        newsList: state.newsList
    }
}

export default connect(mapStateToProps)(NewsListFragment)