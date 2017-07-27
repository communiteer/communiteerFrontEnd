import * as types from '../actions/types';

const INITIAL_STATE = {
  myGroupsAdmin: [],
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_GROUPS_ADMIN_REQUEST:
      return { ...state, loading: true, error: '' }
    
    case types.FETCH_USER_GROUPS_ADMIN_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        myGroupsAdmin: action.data, 
        loading: false, 
        error: ''
      }

    case types.FETCH_USER_GROUPS_ADMIN_ERROR:
      return { ...state, error: 'Encountered an error when fetching my groups admin'}

    default:
      return state;
  }
}