import * as React from 'react'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import HNNewsList from './HNNewsList'

export default class NewsListPage extends React.Component {
    render() {
        return (
            <div>
                <div style={{display: 'flex', flexDirection: 'row' }}>
                    <Navigation />
                    <HNNewsList />
                </div>    
            </div>
        )
    }
}