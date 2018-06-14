import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Error404 extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        404 Error Page
                </h1>
                    <ol className="breadcrumb">
                        <li><Link to="#"><i className="fa fa-dashboard" /> Home</Link></li>
                        <li><Link to="#">Examples</Link></li>
                        <li className="active">404 error</li>
                    </ol>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="error-page">
                        <h2 className="headline text-yellow"> 404</h2>
                        <div className="error-content">
                            <h3><i className="fa fa-warning text-yellow" /> Oops! Page not found.</h3>
                            <p> We could not find the page you were looking for. Meanwhile, you may</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default connect()(Error404);
