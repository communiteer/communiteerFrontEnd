import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Button, CardSection } from './common';
import MyGroupsAdmin from './MyGroupsAdmin';
import MyGroupsMember from './MyGroupsMember';


class MyGroups extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'member'
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Header headerText="My Groups" />

				<CardSection>
					<Button onPress={this.setGroupsMember.bind(this)}>Member</Button>
					<Button onPress={this.setGroupsAdmin.bind(this)}>Admin</Button>
				</CardSection>

				<CardSection>
					{this.renderMyGroupsComponent()}
				</CardSection>

			</View>
		)
	}

	setGroupsMember () {
		return (this.setState({
			page: 'member'
		}))
	}

	setGroupsAdmin() {
		return (this.setState({
			page: 'admin'
		}))
	}

	renderMyGroupsComponent() {
		if (this.state.page === 'member') {
			return <MyGroupsMember />
		}
			return <MyGroupsAdmin />
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#DDFFF7'
	},
	groups: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
}

export default MyGroups