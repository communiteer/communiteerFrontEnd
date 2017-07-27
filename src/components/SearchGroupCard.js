import React from 'react';
import { Text, View } from 'react-native';

import { Card, CardSection } from './common';


const SearchGroupCard = ({ group }) => {
	return (
		<Card>
			<Text>{group.group_name}</Text>
			<Text>{group.admin_fname}</Text>
			<Text>{group.admin_lname}</Text>
			<Text>{group.description}</Text>
		</Card>
	)
};


export default SearchGroupCard;