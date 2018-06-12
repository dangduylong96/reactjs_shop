import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { requestGet } from '../../api/apiRequest';
import { connect } from 'react-redux';

import SEVER_CONFIG from '../../config/severConfig';
class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: ''
        }
    }
    componentDidMount() {
        const _token=localStorage.getItem('_token');
        const url=SEVER_CONFIG.url+'/getDetailAdmin?token='+_token;
        requestGet(url)
        .then(res=>{
            this.setState({
                userName: res.data.userName
            })
        })
    }
	render() {
		return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                {/* Sidebar user panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="" />
                    </div>
                    <div className="pull-left info">
                    <p>{this.state.userName}</p>
                    <Link to="#"><i className="fa fa-circle text-success" /> Trực tuyến</Link>
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
                    <li className="header">Menu</li>
                    <li className="active treeview">
                        <Link to="#">
                            <i className="fa fa-dashboard" /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="treeview">
                    <Link to="#">
                        <i className="fa fa-files-o" />
                        <span>Layout Options</span>
                        <span className="pull-right-container">
                        <span className="label label-primary pull-right">4</span>
                        </span>
                    </Link>
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
                    <li><Link to="#"><i className="fa fa-circle-o text-red" /> <span>Important</span></Link></li>
                    <li><Link to="#"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></Link></li>
                    <li><Link to="#"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></Link></li>
                </ul>
                </section>
                {/* /.sidebar */}
            </aside>
		);
	}
}
export default connect()(SideBar);
