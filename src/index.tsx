import * as React from 'react'
import * as ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { App } from './containers/App'
import { rootReducer } from './reducers'
import { browserHistory } from './browserHistory'

const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.querySelector('.container'))
