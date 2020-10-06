import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

});

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        ext && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export default store;
