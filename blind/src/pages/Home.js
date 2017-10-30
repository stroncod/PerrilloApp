import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';

const Home = () => {
	return (
		<ScrollView>
			<Card 
				title='Modo Ruta'
			>
				<Text style={{ marginBottom: 10 }}>				
					Ingresa tu dirección para recibir tu ruta
				</Text>
				<Button
					icon={{ name: 'code' }}
					backgroundColor='#03A9F4'
					fontFamily='Lato'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Ingresar al modo ruta' 				
					onPress={() => Actions.recordbutton()}			
				/>
			</Card>
			<Card 
				title='Modo Exploración'
			>
				<Text style={{ marginBottom: 10 }}>				
					Ingresa para poder explorar el alrededor
				</Text>
				<Button
					icon={{ name: 'code' }}
					backgroundColor='#4286f4'
					fontFamily='Lato'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Ingresar al modo exploración'
					onPress={() => Actions.exploreMode()}			
				/>
			</Card>
			<Card 
				title='Configuración'
			>
				<Text style={{ marginBottom: 10 }}>				
					Modifica configuraciones de la aplicación
				</Text>
				<Button
					icon={{ name: 'code' }}
					backgroundColor='#4286f4'
					fontFamily='Lato'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Ingresa a configuración'			
				/>
			</Card>
			
		</ScrollView>
	);
};

export default Home;

