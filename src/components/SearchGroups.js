import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FetchAllGroupsInArea, FetchAllEventsInArea } from '../actions'

import { Header, Button, CardSection } from './common';
import SearchGroupCard from './SearchGroupCard';

import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';


class SearchGroups extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.fetchAllGroupsInArea(this.props.areaId)
	}


	render() {
		return (
			<View>
				<ScrollView style={styles.scrollViewStyle}>
					{this.props.groups.groups.map(group => {
						return (
							<TouchableOpacity  key={group.group_id} onPress={() => Actions.aGroup(group)}>
								<SearchGroupCard group={group} />
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
		fetchAllGroupsInArea: (areaId) => {
			dispatch(actions.fetchAllGroupsInArea(areaId))
		}
	}
}

const mapStateToProps = (state) => {
	return {
		groups: state.groups,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchGroups);
