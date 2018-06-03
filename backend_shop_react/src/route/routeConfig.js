import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import dataRoute from './dataRoute';

class RouteConfig extends Component {
    showRoute(){
        return dataRoute.map(e=>(
            <Route key={e.path} path={e.path} exact={e.exact} component={e.main} />
        ))
    }
    render() {
        return (
            <Router>
                <Switch>
                    {this.showRoute()}
                </Switch>
            </Router>
        );
    }
}

export default connect()(RouteConfig);
