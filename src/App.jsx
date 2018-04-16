import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Information from './components/Information';
import Activity from './components/Activity';

const App = () => (
    <div className='wrapper'>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/home' />
                    </Route>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/information' component={Information} />
                    <Route exact path='/activity' component={Activity} />
                </Switch>
            </div>
        </Router>
    </div>
);

export default App;
