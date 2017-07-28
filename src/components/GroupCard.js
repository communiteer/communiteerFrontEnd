import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import * as actions from '../actions';
import { Card, CardSection, Header } from './common';


class GroupCard extends Component {

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<CardSection>
						<Image
							style={styles.imageStyle}
							source={{ uri: '/Users/benwhitfield/Documents/code/Communiteer/communiteerFrontEnd/src/images/Group Image.jpg' }}
						/>
					</CardSection>

					<CardSection>
						<Text>Group Name: {this.props.group_name}</Text>
					</CardSection>

					<CardSection>
						<Text>Admin: {this.props.admin_fname} {this.props.admin_lname}</Text>
					</CardSection>

					<CardSection>
						<Text>Contact: {this.props.contact_details}</Text>
					</CardSection>

					<CardSection>
						<Text>{this.props.description}</Text>
					</CardSection>
				</ScrollView>
			</View>
		)
	}
};

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#DDFFF7'
	},
	imageStyle: {
		height: 200,
		flex: 1,
		width: null
	}
}

export default GroupCard;
