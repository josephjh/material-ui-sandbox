import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

export default (
    <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        {/* <Route path='/dashboard/:path' component={Dashboard}/> */}
        <Route exact path='/' component={Home} />
    </Switch>
)
