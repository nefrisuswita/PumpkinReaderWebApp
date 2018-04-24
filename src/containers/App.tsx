import * as React from 'react'
import { Route, Switch, withRouter, match } from 'react-router'

import NewsListFragment from './NewsListFragment'
import SavedNewsFragment from './SavedNewsFragment'
import NewsDetailFragment from './NewsDetailFragment'

const routes = [
  {
    path: '/',
    exact: true, 
    render: () => <NewsListFragment />
  },
  {
    path: '/saved',
    exact: true, 
    render: () => <SavedNewsFragment />
  },
  {
    path: '/:id',
    exact: true, 
    render: ({ match }: { match: match<any> }) => (
        <NewsDetailFragment id={decodeURIComponent(match.params.id || '')} />
    )
  }
]

export const App = withRouter(() => (
  <div>
    <Switch>
        {routes.map((route, i) => 
          <Route key={i} exact={route.exact} path={route.path} render={route.render} />
        )}
    </Switch> 
  </div> 
))