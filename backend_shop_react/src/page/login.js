import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            txtusername: '',
            txtpassword: ''
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
        let { txtusername, txtpassword }= this.state;
    }
    render() {
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="javascript:void(0)"><b>Trang quản trị</b></a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Nhập thông tin đăng nhập</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group has-feedback">
                                <input name="txtusername" type="text" value={this.state.txtusername} onChange={this.handleInputChange} className="form-control" placeholder="Tên tài khoản" />
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

export default connect()(Login);