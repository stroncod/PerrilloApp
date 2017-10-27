import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RecordButton from './components/RecordButton'; 
import Home from './components/Home';
import CurrentLocation from './components/CurrentLocation';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="HomePage" initial />
				<Scene key="recordbutton" component={RecordButton} title="RecordPage" />
				<Scene key="exploreMode" component={CurrentLocation} title="ExplorePage" />
				
			</Scene>
		</Router>
	);
};

export default RouterComponent;
