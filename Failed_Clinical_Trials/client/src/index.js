import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import articlesReducer from './store/reducers/articlesReducer';

// import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
    articles: articlesReducer,
});

const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
