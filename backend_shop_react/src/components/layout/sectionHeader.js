import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SectionHeader extends Component {
	render() {
        const {  title, start, to }=this.props;
		return (
            <section className="content-header">
                <h1>{title}</h1>
                <ol className="breadcrumb">
                    <li><Link to="#"><i className="fa fa-dashboard" /> {start}</Link></li>
                    <li>{to}</li>
                </ol>
            </section>
		);
	}
}
export default connect()(SectionHeader);