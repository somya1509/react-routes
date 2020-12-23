import React from 'react'
import {Switch} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import Signup from '../pages/SignUp'
import Route from './routes'
/**
* @author
* @function Routes
**/


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={Signup} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            {/* Redirect server to signin page if sign in not successful */}
            <Route component={SignIn} /> 
        </Switch>
    )
}