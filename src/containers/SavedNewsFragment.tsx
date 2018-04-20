import * as React from 'react'
import { connect } from 'react-redux'

import { ReducerState } from '../reducers'
import { NewsList, NewsListProps } from '../components/NewsList'

class SavedNewsFragment extends React.Component<NewsListProps, {}> {
    render() {
        return (
            <div>
                <NewsList newsList={this.props.newsList}/>
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        newsList: state.savedNews
    }
}

export default connect(mapStateToProps)(SavedNewsFragment)