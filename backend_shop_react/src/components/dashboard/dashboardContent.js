import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashboardContent extends Component {
	render() {
		return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Quản trị
                        <small>Bảng quản trị</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="#"><i className="fa fa-dashboard" /> Admin</Link></li>
                        <li className="active">Quản trị</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-lg-3 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-aqua">
                            <div className="inner">
                            <h3>150</h3>
                            <p>New Orders</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-bag" />
                            </div>
                            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-green">
                            <div className="inner">
                            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                            <p>Bounce Rate</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-stats-bars" />
                            </div>
                            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-yellow">
                            <div className="inner">
                            <h3>44</h3>
                            <p>User Registrations</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-person-add" />
                            </div>
                            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                        </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-xs-6">
                        {/* small box */}
                        <div className="small-box bg-red">
                            <div className="inner">
                            <h3>65</h3>
                            <p>Unique Visitors</p>
                            </div>
                            <div className="icon">
                            <i className="ion ion-pie-graph" />
                            </div>
                            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
		);
	}
}
export default connect()(DashboardContent);
