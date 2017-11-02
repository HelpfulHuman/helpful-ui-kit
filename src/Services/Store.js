import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../Reducers';

let middleware = [thunk, routerMiddleware(createHistory())];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
}

export default function() {
  return createStore(reducers, applyMiddleware(...middleware));
}
