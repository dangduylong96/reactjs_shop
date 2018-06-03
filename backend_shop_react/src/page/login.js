import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Trang quản trị</b></a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Nhập thông tin đăng nhập</p>
                        <form action="../../index2.html" method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                <input type="checkbox" /> Nhớ tài khoản
                                </label>
                            </div>
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