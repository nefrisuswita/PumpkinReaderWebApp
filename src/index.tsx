import * as React from 'react'
import * as ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { App } from './containers/App'
import { rootReducer } from './reducers'

const ReduxPromise = require("redux-promise")

const middleware = [ ReduxPromise ]
const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
  , document.querySelector('.container'))
