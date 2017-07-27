import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, Image, ScrollView } from 'react-native';
import { fetchAllEventSkills } from '../actions'
import { Card, CardSection } from './common';

class EventCard extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		// console.log(this.props)
		this.props.fetchAllEventSkills(this.props.eventId)
	}

	render() {
		console.log(this.props.eventSkills.eventSkills[0])
		return (
			<Card>
				<ScrollView>

					<CardSection>
						<Image
							style={styles.imageStyle}
							source={{ uri: '/Users/benwhitfield/Documents/code/Communiteer/frontEnd/src/images/EVENTS.jpg' }}
						/>
					</CardSection>
					<CardSection>
						<Text>Event Name: {this.props.event_name}</Text>
					</CardSection>

					<CardSection>
						<Text>Event Date: {formatDate(this.props.event_date)}</Text>
					</CardSection>

					<CardSection>
						<Text>Event Time: {this.props.event_time}</Text>
					</CardSection>

					<CardSection>
						<Text>Event Description: {this.props.event_description}</Text>
					</CardSection>

					<CardSection>
						<Text>Skills Required:</Text>
		
							{this.props.eventSkills.eventSkills.map(skill => {
								return (
									<Text> {skill.skill_name}</Text>
								)
							})}
				

					</CardSection>

				</ScrollView>
			</Card>
		)
	}
};

const formatDate = (dateString) => {
	return dateString.slice(0, 10)
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllEventSkills: (eventId) => {
			dispatch(fetchAllEventSkills(1))
		}
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		eventSkills: state.eventSkills
	}
}

const styles = {
	imageStyle: {
		height: 200,
		flex: 1,
		width: null
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
