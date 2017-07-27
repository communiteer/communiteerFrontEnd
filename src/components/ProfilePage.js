import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native';
import { FetchUserData } from '../actions'

import { Card, CardSection, Header, Button } from './common';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

// hard coded user id - get this at log in???
const userId = 1;

class ProfilePage extends Component {

	componentDidMount() {
		this.props.fetchUserData()

	}

	render() {
		return (
			<View style={styles.container}>
				<Header headerText='Profile' />
				<CardSection>
					<Image
						style={styles.imageStyle}
						source={{ uri: this.props.user.profilePicture }} />
				</CardSection>

				<CardSection >
						<Text style={styles.helloText}>Hello {this.props.user.user_fName}!</Text>
				</CardSection>

				<CardSection>
					<Button onPress={() => Actions.addGroup()}>Add Group</Button>
					<Button onPress={() => Actions.addEvent()}>Add Event</Button>
				</CardSection>


			</View>
		)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserData: () => {
			dispatch(actions.fetchUserData(userId))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#DDFFF7'
	},
	helloText: {
		fontSize: 18,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10

	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null

	}
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);