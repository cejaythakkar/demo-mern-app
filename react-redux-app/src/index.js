import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './containers/App';
import { createStore , combineReducers , applyMiddleware , compose } from 'redux';
import { Provider }  from 'react-redux';
import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';
import commonReducer from './store/reducer/reducer.common';
import todosReducer from './store/reducer/reducer.todos';
import jottoReducer from './store/reducer/jotto';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    ctr : counterReducer,
    result : resultReducer,
    todos : todosReducer,
    common : commonReducer,
    jotto : jottoReducer
})

const logger = store => {
    return  next => {
        return action => {
            console.log('Middleware] Dispatching' , action); 
            const result = next(action);
            console.log('[Middleware] next state' , store.getState());
            return result;
        }
    }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
