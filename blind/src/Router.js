import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RoutePage from './pages/RoutePage'; 
import Home from './pages/Home';
import ExplorerPage from './pages/ExplorerPage';
import SelectionExplorerPage from './pages/SelectionExplorerPage';
import SelectionDefaultPage from './pages/SelectionDefaultPage';
import BusStopInfoPage from './pages/BusStopInfoPage';


//Router para cada ventana de la app. 
//enlaza una página con un componente en src/pages/

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="home" component={Home} title="HomePage" initial />
				<Scene key="routeMode" component={RoutePage} title="RoutePage" />
				<Scene key="exploreMode" component={ExplorerPage} title="ExplorerPage" />
				<Scene key="selectionExplorer" component={SelectionExplorerPage} title="Selection" />
				<Scene key="selectionDefault" component={SelectionDefaultPage} title="Selection" />
				<Scene key="busInfoStop" component={BusStopInfoPage} title="Información del Paradero" />
				
			</Scene>
		</Router>
	);
};

export default RouterComponent;
