import React from 'react'
import {Switch,Route } from 'react-router-dom'
import Todos from '../../containers/todo';
import Users from '../../containers/users'
import About from '../../containers/about';
import Home from '../../containers/home';
import Redux from '../../containers/redux';
import Jotto from '../../containers/jotto';
import Counter from './counter'
import './body.scss';

export default function Body() {
    return (
        <main className="body-container">
            {/* <Counter />  */}
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/todos" component={Todos}></Route>
                <Route path="/users" component={Users}></Route>
                <Route path="/redux" component={Redux}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/jotto" component={Jotto}></Route>
            </Switch>
        </main>
    )
}
