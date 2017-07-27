import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native';
import { FetchUserData } from '../actions'

import { Card, CardSection } from './common';

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
			<Card style={styles.containerStyle}>
				<CardSection>
					<Image
						style={styles.imageStyle}
						source={{uri: this.props.user.profilePicture}} />
				</CardSection>

				<CardSection>
					<View style={styles.headerContentStyle}>
						<Text>Hello {this.props.user.user_fName}</Text>
					</View>
				</CardSection>

				<Text onPress={() => Actions.addGroup()}>Add Group</Text>
				<Text onPress={() => Actions.addEvent()}>Add Event</Text>
			</Card>
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
	containerStyle: {
		paddingTop: 30,
		backgroundColor: '#bb0000'
	},

	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50

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