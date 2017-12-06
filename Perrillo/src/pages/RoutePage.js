import React from 'react';
import {
  ScrollView
} from 'react-native';
import RecordInterface from '../components/RecordInterface';
import InstructionButton from '../components/InstructionButton';
/*
	Route Mode
 */

const RoutePage = () => {
	return ( 
		<ScrollView>
			<InstructionButton instructions={'inst_record.m4a'} />
			<RecordInterface />

		</ScrollView>
	);
};

export default RoutePage;
