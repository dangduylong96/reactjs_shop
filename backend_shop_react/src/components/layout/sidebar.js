import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { requestGet } from '../../api/apiRequest';
import { connect } from 'react-redux';

import SEVER_CONFIG from '../../config/severConfig';
class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            userName: '',
            currentPath: ''
        }
    }
    componentWillMount() {
        //Get url active side bar
        var path = window.location.pathname;
        this.setState({
            currentPath: path
        })
    }
    componentDidMount() {
        //Open parent active
        let currentActive=document.getElementsByClassName('active');
        if(currentActive.length!==0){
            let dataActive=currentActive[0].getAttribute('data-active');
            let parentActive=document.getElementById(dataActive);
            if(parentActive!==null){
                parentActive.classList.add('active');
            }
        }

        const _token=localStorage.getItem('_token');
        const url=SEVER_CONFIG.url+'/getDetailAdmin?token='+_token;
        requestGet(url)
        .then(res=>{
            this.setState({
                userName: res.data.userName
            })
        })
    }
    isActive=(event)=>{
        //Remove active all element sidebar
        // let elementsActive = document.getElementsByClassName('treeview');
        // let lenghtElementsActive=elementsActive.length;
        // for(var i=0;i<lenghtElementsActive;i++){
        //     elementsActive[i].classList.remove('active');
        // }
        //Add class active in tag click
        let currentElement=event.currentTarget;
        currentElement.classList.toggle('active');
    }
	render() {
        let { currentPath }=this.state;
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
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">Menu</li>
                    <li className={currentPath==='/dashboard'?'treeview active':'treeview'}>
                        <Link to="/dashboard">
                            <i className="fa fa-dashboard" /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="treeview" onClick={this.isActive} id="category">
                        <Link to="#">
                            <i className="fa fa-tags" />
                            <span>Quản lí loại</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu">
                            <li className={currentPath==='/category'?'active':''} data-active="category"><Link to="/category"><i className="fa fa-circle-o text-yellow" /> Danh sách loại</Link></li>
                            <li className={currentPath==='/addCategory'?'active':''} data-active="category"><Link to="/addCategory"><i className="fa fa-circle-o text-yellow" /> Thêm loại</Link></li>
                        </ul>
                    </li>
                    <li className="treeview" onClick={this.isActive}>
                        <Link to="#">
                            <i className="fa fa-product-hunt" />
                            <span>Quản lí sản phẩm</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </Link>
                        <ul className="treeview-menu" id="product">
                            <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o text-yellow" /> Danh sách sản phẩm</a></li>
                            <li className={currentPath==='/addProduct'?'active':''} data-active="product"><a href="/addProduct"><i className="fa fa-circle-o text-yellow" /> Thêm sản phẩm</a></li>
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
