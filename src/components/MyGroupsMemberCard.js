import React from 'react';
import { Text, View } from 'react-native';

import { Card, CardSection } from './common';


const MyGroupsMemberCard = ({ myGroupsMember }) => {
	return (
		<Card>
			<Text>{myGroupsMember.group_name}</Text>
			<Text>{myGroupsMember.admin_fname}</Text>
			<Text>{myGroupsMember.admin_lname}</Text>
			<Text>{myGroupsMember.description}</Text>
		</Card>
	)
};



export default MyGroupsMemberCard;