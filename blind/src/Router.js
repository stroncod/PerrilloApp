import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RecordButton from './components/RecordButton'; 
import Home from './components/Home';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="recordbutton" component={RecordButton} title="RecordPage" />
				<Scene key="home" component={Home} title="HomePage" initial />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
