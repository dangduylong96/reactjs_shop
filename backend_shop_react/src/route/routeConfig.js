import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

import dataRoute from './dataRoute';
import Login from '../page/login';
import PrivateRoute from './privateRoute';
import { requestGet } from '../api/apiRequest';
import SEVER_CONFIG from '../config/severConfig';

var isLogin=async(token)=>{
    const url=SEVER_CONFIG.baseUrl+'/checkToken?token='+token;
    return await requestGet(url)
    .then(async res=>{
        if(res.status==='success'){
            return true;
        }
    })
    .catch(async error=>{
        console.log('Token đã hết hạn')
        return false;
    })
};
class RouteConfig extends Component {
    async checkLogin(){
        let _token=localStorage.getItem('_token');
        if(_token!==null){
            let statusLoading=await isLogin(_token);
            await this.props.statusLogin(statusLoading);
            await this.props.statusLoading(false);
        }else{
            await this.props.statusLogin(false);
            await this.props.statusLoading(false);
        }
    }
    showRoute(){
        let { isLogin }=this.props;
        return dataRoute.map(e=>(
            <PrivateRoute key={e.path} path={e.path} exact={e.exact} component={e.main} isLogin={isLogin}/>
        ))
        
    }
    render() {
        this.checkLogin();
        let { isLogin, isLoading }=this.props;
        if (isLoading) {
            return <p>loading...</p>;
        }
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login} />
                    {this.showRoute()}
                </Switch>
            </Router>
        );
    }
}
function mapStateToProps(state){
    return {
        isLogin: state.isLogin,
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps,actionCreators)(RouteConfig);
