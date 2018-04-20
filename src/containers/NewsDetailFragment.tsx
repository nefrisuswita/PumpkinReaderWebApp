import * as React from 'react'
import { connect } from 'react-redux'

interface ParamsType {
    id: string
}

interface PropsType {
    params: ParamsType
}

class NewsDetailFragment extends React.Component<PropsType, {}> {
    render() {
        return (
            <div>
                {this.props.params.id}
            </div>
        )
    }
}


export default connect(null)(NewsDetailFragment)