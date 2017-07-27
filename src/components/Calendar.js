import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Agenda } from 'react-native-calendars';

import { FetchUserEvents } from '../actions'
import * as actions from '../actions';
import Card from './common/Card';
import { Actions } from 'react-native-router-flux';


class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      items: {}
    }
  }
  componentDidMount() {
    this.props.fetchUserEvents(this.props.userId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchUserEvents(nextProps.userId)     
    }
  }
  render() {
   console.log(this.props.userId)
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2017-07-14'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }
  loadItems(day) {
    // dispatch thunk for fetching events
    setTimeout(() => {
      const newItems = {};
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        newItems[strTime] = this.state.items[strTime] || []
        this.props.event.forEach(events => {
          if (strTime === events.event_date.slice(0, 10)) {
            newItems[strTime] = [{
              "event_id": events.event_id,
              "event_name": events.event_name,
              "event_date": events.event_date,
              "event_time": events.event_time.slice(0,5),
              "event_description": events.event_descrtiption,
              "area_name": events.area_name,
              "group_name": events.group_name
            }];
          }
        })
      }
      this.setState({ items: newItems });
    }, 1000);

  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: 70 }]} >
        <TouchableOpacity onPress={() => Actions.anEvent(item)} >
        <Text>{item.group_name}</Text>
        <Text>{item.event_name}</Text>
        <Text>{item.event_time}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}></View>
    );
  };

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  };

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserEvents: (userId) => {
      dispatch(actions.fetchUserEvents(userId))
    }
  }
}
const mapStateToProps = (state) => {
  //console.log(state.user.user_id)
  return {
    event: state.userEvents.userEvents.data || [],
    user: state.user,
    userId: state.user.user_id
  }
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)