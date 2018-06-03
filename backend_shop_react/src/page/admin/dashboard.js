import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
        <div>Đây là trang quản trị</div>
    );
  }
}

export default connect()(Dashboard);