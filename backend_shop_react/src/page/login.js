import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';
import SEVER_CONFIG from '../config/severConfig';
import { requestPost } from '../api/apiRequest';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            txtemail: 'admin@gmail.com',
            txtpassword: '1',
            redirect: false
        }
    }
    handleInputChange=(event)=>{
        let target=event.target;
        let name=target.name;
        let value=target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let { txtemail, txtpassword }= this.state;
        if(txtemail==='') return alert('Tên đăng nhập k được bỏ trống');
        if(txtpassword==='') return alert('Mật khẩu k được bỏ trống');
        const url=SEVER_CONFIG.urlLogin;
        let dataPost={
            txtemail: txtemail,
            txtpassword: txtpassword
        };
        requestPost(url,dataPost)
        .then(resjson=>{
            if(resjson.status==='success'){
                //Lưu token vào redux
                const token=resjson.data._token;
                localStorage.setItem('_token', token);
                alert('Đăng nhập thành công');
                this.setState({
                    redirect: true
                })
            }else{
                alert('Tài khoản hoặc mật khẩu không chính xác.Vui lòng kiêm tra lại');
            }
        })
        .catch(err=>{
            console.log('Phát hiện nghi vấn bảo mật')
        })
    }
    render() {
        let redirect=this.state.redirect;
        if(redirect){
            this.props.statusLoading(true);
            return <Redirect to={{ pathname: '/dashboard'}} />
        }
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <p><b>Trang quản trị</b></p>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Nhập thông tin đăng nhập</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input name="txtemail" type="text" value={this.state.txtemail} onChange={this.handleInputChange} className="form-control" placeholder="Tên tài khoản" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback" />
                            </div>
                            <div className="form-group has-feedback">
                                <input name="txtpassword" type="password" value={this.state.txtpassword} onChange={this.handleInputChange} className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback" />
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                </div>
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Đăng nhập</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        isLogin: state.isLogin,
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps,actionCreators)(Login);