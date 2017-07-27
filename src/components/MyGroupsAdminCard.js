import React from 'react';
import { Text, View } from 'react-native';

import { Card, CardSection } from './common';


const MyGroupsAdminCard = ({ myGroupsAdmin }) => {
	return (
		<Card>
			<Text>{myGroupsAdmin.group_name}</Text>
			<Text>{myGroupsAdmin.admin_fname}</Text>
			<Text>{myGroupsAdmin.admin_lname}</Text>
			<Text>{myGroupsAdmin.description}</Text>
		</Card>
	)
};



export default MyGroupsAdminCard;

//             <Text>{myGroupsMember.league}</Text> add a sort and map to display league from userPoints on groups/groupId/user