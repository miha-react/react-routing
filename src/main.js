import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutPage from './components/AboutPage';
import InboxPage from './components/InboxPage';
import Message from './components/Message';
import {HashRouter as Router , Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App>
           <Route path="/about" component={AboutPage} />
            <Route path="/inbox" component={InboxPage} />
            <Route path="/inbox/messages/:messageId" component={Message} />
         </App>
    </Router >,document.getElementById('root'));





