import * as React from 'react'
import { connect } from 'react-redux'

import { ReducerState } from '../reducers'

interface PropsType {
    id: String
}

class NewsDetailFragment extends React.Component<PropsType, {}> {
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}

export default connect<{}, {}, PropsType>(null)(NewsDetailFragment)