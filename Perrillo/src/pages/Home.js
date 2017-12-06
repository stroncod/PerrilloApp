import React from 'react';
import {
  Button,
  Text,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';

const Home = () => {
	/*
		Home Page
		-> Route Mode : by voice, give an adress and get routes from Gmaps
		-> Explore Mode : gives current location by voice 
		-> Bus Stop Info : gives arriving time of buses on nearby stop
	 */ 
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
					onPress={() => Actions.routeMode()}			
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
				title='Información de Paraderos'
			>
				<Text style={{ marginBottom: 10 }}>				
					Entrega información de los servicios de los paraderos
				</Text>
				<Button
					icon={{ name: 'code' }}
					backgroundColor='#4286f4'
					fontFamily='Lato'
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title='Ingresar a información de paradero'	
					onPress={() => Actions.busInfoStop()}		
				/>
			</Card>		
		</ScrollView>
	);
};

export default Home;

