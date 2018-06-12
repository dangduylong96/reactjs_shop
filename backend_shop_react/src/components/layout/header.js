import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>Quản</b>Trị</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Quản</b>Trị</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <Link to="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </Link>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img alt="" src="dist/img/user2-160x160.jpg" className="user-image"  />
                                <span className="hidden-xs">Đăng xuất</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
		);
	}
}
export default connect()(Header);
