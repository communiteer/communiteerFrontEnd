import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { fetchUserGroupsMember } from '../actions';
import * as actions from '../actions'

import { Header, Button, CardSection } from './common';
import SearchGroupCard from './SearchGroupCard';

class MyGroupsMember extends Component {
  componentDidMount() {
    this.props.fetchUserGroupsMember(this.props.userId)
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView style={styles.scrollViewStyle}>
          {this.props.myGroupsMember.myGroupsMember.map(memberGroup => {
            return (
              <TouchableOpacity key={memberGroup.group_id} onPress={() => Actions.aGroup(memberGroup)}>
                <SearchGroupCard group={memberGroup} />
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
    fetchUserGroupsMember: (userId) => {
      dispatch(fetchUserGroupsMember(userId))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    myGroupsMember: state.myGroupsMember,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyGroupsMember);

