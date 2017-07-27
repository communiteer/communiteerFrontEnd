import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';

const MyGroups = () => {
	return (
		<View style={styles.container}>
			<Text 
				style={styles.groups}>
				MY GROUPS
		</Text>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb0000'
	},
	groups: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'	
	}
}

export default MyGroups