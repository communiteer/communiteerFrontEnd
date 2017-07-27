import * as types from '../actions/types';

const INITIAL_STATE = {
  group_id: null,
  group_name: '',
  description: '',
  contact_details: '',
  admin_fname: '',
  admin_lname: '',
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_GROUP_INFO_REQUEST:
      return { ...state, loading: true, error: '' }

    case types.FETCH_GROUP_INFO_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        events: action.data,
        loading: false,
        error: ''
      }

    case types.FETCH_GROUP_INFO_ERROR:
      return { ...state, error: 'Encountered an error' }

    default:
      return state
  }
}