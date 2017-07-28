import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux'



class AdminGroupCard extends Component {


	render() {
		// console.log('props',this.props, this.state)
		return (
			<Card>
				<ScrollView>
					<CardSection>
						<Image
							style={styles.imageStyle}
							source={{ uri: '/Users/benwhitfield/Documents/code/Communiteer/frontEnd/src/images/working groups.jpg' }}
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
					<CardSection>
						<Button>Add Event</Button>
					</CardSection>

				</ScrollView>
			</Card>
		)
	}
};

const styles = {
	imageStyle: {
		height: 200,
		flex: 1,
		width: null
	}
}

export default AdminGroupCard;