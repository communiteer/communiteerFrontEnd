import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native';
import { Header, Button, CardSection } from './common';
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
				<CardSection>
					<Button onPress={this.setGroups.bind(this)}>Groups</Button>
					<Button onPress={this.setEvents.bind(this)}>Events</Button>
				</CardSection>

				 <CardSection>
					{this.renderSearchComponent()}
				</CardSection> 

			</View>
		)
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
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#bb3000'
	},
	search: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff'
	}
}

export default Search;
