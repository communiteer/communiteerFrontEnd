import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { fetchAllEventsInArea } from '../actions'

import { Header, Button, CardSection, Card } from './common';
import SearchEventCard from './SearchEventCard';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';



class SearchEvents extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.fetchAllEventsInArea(this.props.areaId)
	}

	render() {

		return (
			<View>
				<ScrollView vertical style={styles.scrollViewStyle}>
					{this.props.events.events.map(event => {
						return (
							<TouchableOpacity key={event.event_id} onPress={() => Actions.anEvent(event)}>
								<SearchEventCard event={event} />
							</TouchableOpacity>
						)
					})}
				</ScrollView>
			</View>

		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllEventsInArea: (areaId) => {
			dispatch(fetchAllEventsInArea(areaId))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events,
		user: state.user,
		areaId: state.user.area
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb3000'
	},
	search: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	},
	scrollViewStyle: {
		flexDirection: 'column'

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchEvents);

