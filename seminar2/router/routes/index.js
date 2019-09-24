import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Main1 from "./../components/Main1";
import Main2 from "./../components/Main2";

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={Main1}/>
        <Route path='/main2' component={Main2}/>
    </Switch>
);

export default withRouter(MainRouter);
