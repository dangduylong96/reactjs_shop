import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { requestGet } from '../api/apiRequest';
import SEVER_CONFIG from '../config/severConfig';

var check=null;
var isLogin=async(token)=>{
    const _token=localStorage.getItem('_token');
    const url=SEVER_CONFIG.baseUrl+'/checkToken?token='+_token;
    return await requestGet(url)
    .then(async res=>{
        if(res.status==='success'){
            check=true;
            return true;
        }
    })
    .catch(async error=>{
        check=false;
        console.log('Token đã hết hạn')
        return false;
    })
};
const PrivateRoute =({ component: Component, ...rest }) => {
    let isLoggedIn=rest.isLogin;
    console.log('private route isLogin: '+isLoggedIn);
    // var check = isLogin(); 
    // var k=isLogin();
    // k.then(res=>{
    //     console.log(res);
    //     check=res;
    // })
    // console.log('value check: '+check);
    // if(check===null){
    //     return <p>loadding....</p>
    // }
    return (
        <Route
            {...rest}
                render={props =>
                    isLoggedIn? (
                    <Component {...props} />
                    ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
}
export default PrivateRoute