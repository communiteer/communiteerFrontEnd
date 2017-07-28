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
		this.props.fetchAllEventSkills(this.props.event_id)
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<CardSection>
						<Image
							style={styles.imageStyle}
							source={{ uri: '/Users/benwhitfield/Documents/code/Communiteer/communiteerFrontEnd/src/images/event.jpg' }}
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
									<Text key={skill.skill_name}> {skill.skill_name}</Text>
								)
							})}
				

					</CardSection>

				</ScrollView>
			</View>
		)
	}
};

const formatDate = (dateString) => {
	return dateString.slice(0, 10)
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllEventSkills: (eventId) => {
			dispatch(fetchAllEventSkills(eventId))
		}
	}
}

const mapStateToProps = (state) => {
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
