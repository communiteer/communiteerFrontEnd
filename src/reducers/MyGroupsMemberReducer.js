import * as types from '../actions/types';

const INITIAL_STATE = {
  myGroupsMember: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_MEMBER_REQUEST:
      return { ...state, loading: true, error: '' }
    
    case types.FETCH_USER_GROUPS_MEMBER_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        myGroupsMember: action.data, 
        loading: false, 
        error: ''
      }

    case types.FETCH_USER_GROUPS_MEMBER_ERROR:
      return { ...state, error: 'Encountered an error when fetching my groups member'}

    default:
      return state;
  }
}