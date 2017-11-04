import React from 'react';
import {
  ScrollView
} from 'react-native';
import RecordInterface from '../components/RecordInterface';
import InstructionButton from '../components/InstructionButton';
//Pagina de entrega de ruta
//Componente instructions utilizado para instrucciones de audio
//Record interface es toda la interfaz para grabar tanto los botones como el texto

const RoutePage = () => {

	return ( 
		<ScrollView>
			<InstructionButton instructions={'inst_record.m4a'} />
			<RecordInterface />

		</ScrollView>
	);
};

export default RoutePage;
