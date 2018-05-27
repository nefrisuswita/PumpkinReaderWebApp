import * as React from 'react'
import { connect } from 'react-redux'

import { NewsList, Props } from '../components/NewsList'
import { ReducerState } from '../reducers'
import { putNewsDetail } from '../actions'
import Navigation from './Navigation'

class SavedNewsListPage extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                    <NewsList newsList={this.props.newsList} putNewsDetail={this.props.putNewsDetail}/>
                </div>    
            </div>
        )
    }
}

function mapStateToProps(state: ReducerState) {
    return {
        newsList: state.savedNews
    }
}

export default connect(mapStateToProps, { putNewsDetail })(SavedNewsListPage)