import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Card, CardSection } from './common';


const SearchEventCard = ({ event }) => {
    return (
        <Card>
            <Text>{event.event_name}</Text>
            <Text>{event.event_date}</Text>
            <Text>{event.event_time}</Text>
        </Card>
    )
};



export default SearchEventCard;

