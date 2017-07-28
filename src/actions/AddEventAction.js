import * as types from './types';
import { ROOT } from '../../config.js';
import axios from 'react-native-axios';



export const addEventUpdate = ({ prop, value }) => {

  return {
    type: types.ADD_EVENT_UPDATE,
    data: { prop, value }
  }
}

export const addEventCreate = ({ event_name, event_date, time, description, area, group_id}) => {

  const data = {
        name: event_name,
        date: event_date,
        time: "11:00",
        description: description,
        area: area,
        group: group_id,
        skills: []
      }

      console.log(data);
  axios.post(`${ROOT}/event`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {type: types.ADD_EVENT_CREATE}
}
