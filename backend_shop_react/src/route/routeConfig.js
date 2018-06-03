import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../page/login';
import Dashboard from '../page/admin/dashboard';

class RouteConfig extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    );
  }
}

export default connect()(RouteConfig);
