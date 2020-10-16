import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {postsReducer} from './postsReducer';
import {appReducer} from './appReducer';

const rootReducer = combineReducers({
  postsStore: postsReducer,
  app: appReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__() :
        (f) => f,
    ),
);

export default store;
