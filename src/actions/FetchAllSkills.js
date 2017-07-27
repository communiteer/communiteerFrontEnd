import * as types from './types'
import { ROOT } from '../../config.js';
import axios from 'react-native-axios'

 // [SEARCH] FETCH ALL GROUPS IN AREA
export function fetchAllSkills() {
  return function (dispatch) {
    dispatch(fetchAllSkillsRequest());
    axios.get(`${ROOT}/skills`)
      .then(res => {
        //receive data
        dispatch(fetchAllSkillsSuccess(res.data.skills))
      })
      .catch(err => {
        dispatch(fetchAllSkillsError(err))
      })
  }
}

 export function fetchAllSkillsRequest () {
   return {
     type: types.FETCH_ALL_SKILLS_REQUEST
   };
 }

  export function fetchAllSkillsSuccess (skills) {
   return {
     type: types.FETCH_ALL_SKILLS_SUCCESS,
     data: skills
   };
 }

  export function fetchAllSkillsError (error) {
   return {
     type: types.FETCH_ALL_SKILLS_ERROR,
     data: error
   };
 }