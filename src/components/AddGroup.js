import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux'
import { addGroupUpdate, addGroupCreate } from '../actions/AddGroupAction'
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';

class AddGroup extends Component {
	onButtonPress() {
		// console.log(this.props)
		const { group_name, group_Id, description, contact_details, user } = this.props;
		
		this.props.addGroupCreate({ 
			group_name, 
			group_Id, 
			description, 
			contact_details, 
			user_id: user.user_id, 
			area: user.area 
		})
	}

	render() {
		const {updateGroup} = this.props;
		return (
			<View style={styles.container}>
				<CardSection>
					<Input
						label="Group Name"
						placeholder="Group name"
						value={this.props.group_name}
						onChangeText={value => updateGroup({prop: 'group_name', value})}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Description"
						placeholder="Group Description"
						value={this.props.description}
						onChangeText={value => updateGroup({prop: 'description', value})}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone Number"
						placeholder="+44 6666 666666"
						value={this.props.contact_details}
						onChangeText={value => updateGroup({prop: 'contact_details', value})}
					/>
				</CardSection>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create Group
					</Button>
				</CardSection>
			</View>
		)
	}
}

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

const mapStateToProps = (state) => {
	const { group_name, group_Id, description, contact_details } = state.createGroupForm;
	return { 
		group_name, 
		group_Id, 
		description, 
		contact_details, 
		user: state.user 
	}
}

export default connect(mapStateToProps, {updateGroup: addGroupUpdate, addGroupCreate})(AddGroup);
