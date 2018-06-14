import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/layout/header';
import SideBar from '../../components/layout/sidebar';
import Footer from '../../components/layout/footer';

class Layout extends Component {
    render() {
        var { location, match }=this.props;
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">
                    <Header />
                    <SideBar />
                    <this.props.content location={location} match={match}/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect()(Layout);