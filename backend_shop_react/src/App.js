import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import RouteConfig from './route/routeConfig';
class App extends Component {
	render() {
		return (
			<Provider store={store} >
				<RouteConfig />
			</Provider>
		);
	}
}
export default App;
