import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/layout/header';
import SideBar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';
import DashboardContent from '../../components/dashboard/dashboardContent';

class Dashboard extends Component {
    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <SideBar />
                    <DashboardContent />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect()(Dashboard);