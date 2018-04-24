import * as React from 'react'
import * as ReactDOM from 'react-dom' 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

import { App } from './containers/App'
import { rootReducer } from './reducers'

const ReduxPromise = require("redux-promise")

const middleware = [ ReduxPromise ]
const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
