import * as React from 'react'
import { Route, Switch, withRouter, match } from 'react-router'

import HNNewsListPage from './HNNewsListPage'
import SavedNewsListPage from './SavedNewsListPage'
import NewsDetailPage from './NewsDetailPage'

const routes = [
  {
    path: '/',
    exact: true, 
    render: () => <HNNewsListPage />
  },
  {
    path: '/saved',
    exact: true, 
    render: () => <SavedNewsListPage />
  },
  {
    path: '/:id',
    exact: true, 
    render: ({ match }: { match: match<any> }) => (
        <NewsDetailPage id={parseInt(match.params.id)} />
    )
  }
]

export const App = withRouter(() => (
  // <div style={{ backgroundColor: '#ef6c02' }}>
    <Switch>
        {routes.map((route, i) => 
          <Route key={i} exact={route.exact} path={route.path} render={route.render} />
        )}
    </Switch> 
  // </div>
))