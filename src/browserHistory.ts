import { History } from 'history'

import createHistory from 'history/createBrowserHistory'

export const browserHistory = typeof window !== 'undefined'
  ? createHistory()
  : { push: (...any: any[]) => {} } as History
