import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux'
import { addEventUpdate, addEventCreate } from '../actions/AddEventAction'
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions'

class AddEvent extends Component {
    onButtonPress() {
        
        const { event_name, event_date, event_time, event_Id, description, user, groupId } = this.props;
        this.props.addEventCreate({
            event_name,
            event_date,
            event_time,
            event_Id,
            description,
            area: user.area,
            group_id: groupId
        })
    }

    render() {
        const { updateEvent } = this.props;
        return (
            <View style={styles.container}>
                <CardSection>
                    <Input
                        label="Event Name"
                        placeholder="Event name"
                        value={this.props.event_name}
                        onChangeText={value => updateEvent({ prop: 'event_name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Event Date"
                        placeholder="YYYY-MM-DD"
                        value={this.props.event_date}
                        onChangeText={value => updateEvent({ prop: 'event_date', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Event Time"
                        placeholder="00:00"
                        value={'09:00'}
                        onChangeText={value => updateEvent({ prop: 'event_time', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Description"
                        placeholder="Event Description"
                        value={this.props.description}
                        onChangeText={value => updateEvent({ prop: 'description', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone Number"
                        placeholder="+44 6666 666666"
                        value={this.props.contact_details}
                        onChangeText={value => updateEvent({ prop: 'contact_details', value })}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Event
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
    const { event_name, event_date, event_time, event_Id, description, contact_details } = state.createEventForm;
    return {
        event_name,
        event_date,
        event_time,
        event_Id,
        description,
        contact_details,
        user: state.user,
        myGroupsAdmin: state.myGroupsAdmin
    }
}

export default connect(mapStateToProps, { updateEvent: addEventUpdate, addEventCreate })(AddEvent);
