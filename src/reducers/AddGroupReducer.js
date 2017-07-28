import * as types from '../actions/types';

const INITIAL_STATE = {
  group_name: '',
  description: '',
  contact_details: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_GROUP_UPDATE:
      return { 
        ...state, 
        [action.data.prop]: action.data.value
      }
    
      case types.ADD_GROUP_CREATE:
        return {
          ...state, 
          group_name: '',
          description: '',
          contact_details: '' 
        }
    
    default:
      return state;
  }
}