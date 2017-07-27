import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import { Actions } from 'react-native-router-flux';


const Notifications = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.notification}>
					Notifications !!!
				</Text>
				<Text onPress={() => Actions.anEvent()}>A NOTIFICATION</Text>
			</View>	
		)
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb3040'
	},
	notification: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'	
	}
}

export default Notifications