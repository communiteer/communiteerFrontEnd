import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'


export function fetchAllEventSkills(eventId) {
  return function (dispatch) {
    console.log(eventId)
    dispatch(fetchEventSkillsRequest(eventId));
    axios.get(`${ROOT}/events/${eventId}/skills`)
      .then(res => {
        dispatch(fetchEventSkillsSuccess(res.data.data))
      })
      .catch(err => {
        dispatch(fetchEventSkillsError(err))
      })
  }
}

 export function fetchEventSkillsRequest () {
   return {
     type: types.FETCH_EVENT_SKILLS_REQUEST
   };
 }

  export function fetchEventSkillsSuccess (skills) {
   return {
     type: types.FETCH_EVENT_SKILLS_SUCCESS,
     data: skills
   };
 }

  export function fetchEventSkillsError (error) {
   return {
     type: types.FETCH_EVENT_SKILLS_ERROR,
     data: error
   };
 }