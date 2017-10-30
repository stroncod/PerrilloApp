import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RoutePage from './pages/RoutePage'; 
import Home from './pages/Home';
import ExplorerPage from './pages/ExplorerPage';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="HomePage" initial />
				<Scene key="recordbutton" component={RoutePage} title="RoutePage" />
				<Scene key="exploreMode" component={ExplorerPage} title="ExplorerPage" />
				
			</Scene>
		</Router>
	);
};

export default RouterComponent;
