import react from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './App/store'
ReactDom.render(
    <Router>
       <Provider store={store}>
       <App />
       </Provider>
    </Router>
    
    , document.getElementById('root'));