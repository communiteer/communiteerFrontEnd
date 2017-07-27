import * as types from './types';
import { ROOT } from '../../config.js';
import axios from 'react-native-axios';



export const addGroupUpdate = ({ prop, value }) => {

  return {
    type: types.ADD_GROUP_UPDATE,
    data: { prop, value }
  }
}

export const addGroupCreate = ({ group_name, description, contact_details, user_id, area}) => {
  axios.post(`${ROOT}/users/${user_id}/group`, {
        name: group_name,
        description: description,
        details: contact_details,
        area: area
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {type: types.ADD_GROUP_CREATE}
}
