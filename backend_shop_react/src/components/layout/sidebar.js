import React, { Component } from 'react';

import { connect } from 'react-redux';

class SideBar extends Component {
	render() {
		return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                    </div>
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                        </button>
                    </span>
                    </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className="active treeview">
                    <a href="#">
                        <i className="fa fa-dashboard" /> <span>Dashboard</span>
                        <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right" />
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li className="active"><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
                        <li><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
                    </ul>
                    </li>
                    <li className="treeview">
                    <a href="#">
                        <i className="fa fa-files-o" />
                        <span>Layout Options</span>
                        <span className="pull-right-container">
                        <span className="label label-primary pull-right">4</span>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o" /> Top Navigation</a></li>
                        <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o" /> Boxed</a></li>
                        <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o" /> Fixed</a></li>
                        <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="pages/widgets.html">
                        <i className="fa fa-th" /> <span>Widgets</span>
                        <span className="pull-right-container">
                        <small className="label pull-right bg-green">new</small>
                        </span>
                    </a>
                    </li>
                    <li className="header">LABELS</li>
                    <li><a href="#"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
                </ul>
                </section>
                {/* /.sidebar */}
            </aside>
		);
	}
}
export default connect()(SideBar);
