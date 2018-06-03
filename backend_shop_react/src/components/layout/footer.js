import React, { Component } from 'react';

import { connect } from 'react-redux';

class Footer extends Component {
	render() {
		return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                <b>Version</b> 2.4.0
                </div>
                <strong>Copyright © 2018-2019 <a href="https://adminlte.io">Duy Long</a>.</strong> All rights
                reserved.
            </footer>
		);
	}
}
export default connect()(Footer);
