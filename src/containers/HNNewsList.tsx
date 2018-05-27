import * as React from 'react'
import { connect } from 'react-redux'

import { NewsList, Props } from '../components/NewsList'
import { ReducerState } from '../reducers'
import { putNewsDetail } from '../actions'

class NHNewsList extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <NewsList newsList={this.props.newsList} putNewsDetail={this.props.putNewsDetail}/>
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        newsList: state.newsList
    }
}

export default connect(mapStateToProps, { putNewsDetail })(NHNewsList)