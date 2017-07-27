import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchUserGroupsAdmin } from '../actions';
import * as actions from '../actions'

import { Header, Button, CardSection } from './common';
import SearchGroupCard from './SearchGroupCard';

class MyGroupsAdmin extends Component {
  componentDidMount() {
    this.props.fetchUserGroupsAdmin(this.props.userId)

  }

  render() {
    console.log('ADMIN GROUP', this.props.myGroupsAdmin.myGroupsAdmin)
    return (
      <View style={styles.containerStyle}>
        <ScrollView style={styles.scrollViewStyle}>
          {this.props.myGroupsAdmin.myGroupsAdmin.map(adminGroup => {
            return (
              <TouchableOpacity key={adminGroup.group_id} onPress={() => Actions.aGroup(adminGroup)}>
                <SearchGroupCard group={adminGroup} />
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
    fetchUserGroupsAdmin: (userId) => {
      dispatch(fetchUserGroupsAdmin(userId))
    }
  }
}

const mapStateToProps = (state) => {

  return {

    myGroupsAdmin: state.myGroupsAdmin,
    user: state.user,
    userId: state.user.user_id
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#bb3000',
  },
  scrollViewStyle: {
    flexDirection: 'column'
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupsAdmin);

