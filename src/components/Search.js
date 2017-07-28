import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Header, Button, CardSection, Card } from './common';
import SearchGroups from './SearchGroups';
import SearchEvents from './SearchEvents';



class Search extends Component {
constructor (props) {
	super(props);
	
	this.state = {
		page: 'groups'
	}
}

	render() {
		
		return (
			<View style={styles.container}>
				<Header headerText='Search' />
				<CardSection height={60}>
					<Button onPress={this.setGroups.bind(this)}>Groups</Button>
					<Button onPress={this.setEvents.bind(this)}>Events</Button>
				</CardSection>

				<CardSection height={Dimensions.get('screen').height - 250}>
					{this.renderSearchComponent()}
				</CardSection> 

			</View>
		);
	}

	setGroups() {
		return (this.setState({
			page: 'groups'
		}))

	}

	setEvents() {
		return (this.setState({
			page: 'events'
		}))
}

	renderSearchComponent() {
		if (this.state.page === 'events') {
			return <SearchEvents />;
		}
			return 	<SearchGroups />;
		
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#DDFFF7'
	},
	search: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
}

export default Search;
