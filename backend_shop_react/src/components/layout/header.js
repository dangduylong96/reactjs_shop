import React, { Component } from 'react';

import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini"><b>A</b>LT</span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                            <span className="hidden-xs">Alexander Pierce</span>
                            </a>
                            <ul className="dropdown-menu">
                            {/* User image */}
                            <li className="user-header">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                <p>
                                Alexander Pierce - Web Developer
                                <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            {/* Menu Body */}
                            <li className="user-body">
                                <div className="row">
                                <div className="col-xs-4 text-center">
                                    <a href="#">Followers</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Sales</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Friends</a>
                                </div>
                                </div>
                                {/* /.row */}
                            </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
		);
	}
}
export default connect()(Header);
