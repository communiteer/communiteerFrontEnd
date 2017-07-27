import * as types from '../actions/types';

const INITIAL_STATE = {
  user_id: null,
  user_fName: '',
	user_lName: '',
  area: null,
  area_name: '',
	phone: null,
	email: '',
  profilePicture: '',
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_INFO_REQUEST:
      return { ...state, loading: true, error: ''}
    
    case types.FETCH_USER_INFO_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        user_id: action.data.user_id,
        user_fName: action.data.user_fname,
        user_lName: action.data.user_lname,
        area: action.data.area,
        area_name: action.data.area_name,
        phone: action.data.phone,
        email: action.data.email,
        profilePicture: action.data.profilepicture,
        loading: false 
      }

    case types.FETCH_USER_INFO_ERROR:

      return { ...state, error: 'Encountered an error'}
    
    default:
      return state
  }
}
