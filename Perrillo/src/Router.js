import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RoutePage from './pages/RoutePage'; 
import Home from './pages/Home';
import ExplorerPage from './pages/ExplorerPage';
import SelectionExplorerPage from './pages/SelectionExplorerPage';
import SelectionDefaultPage from './pages/SelectionDefaultPage';
import BusStopInfoPage from './pages/BusStopInfoPage';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="Perrillo" initial />
				<Scene key="routeMode" component={RoutePage} title="Modo Ruta" />
				<Scene key="exploreMode" component={ExplorerPage} title="Modo Exploración" />
				<Scene key="selectionExplorer" component={SelectionExplorerPage} title="Paraderos" />
				<Scene key="selectionDefault" component={SelectionDefaultPage} title="Bancos" />
				<Scene key="busInfoStop" component={BusStopInfoPage} title="Información del Paradero" />
				
			</Scene>
		</Router>
	);
};

export default RouterComponent;
