// //import firebase from '../firebase';
// import { Actions } from 'react-native-router-flux';
// import * as types from './types';

// export const emailChanged = (text) => {
//   return {
//     type: types.AUTH_EMAIL_CHANGED,
//     data: text
//   }
// }

// export const passwordChanged = (text) => {
//   return {
//     type: types.AUTH_PASSWORD_CHANGED,
//     data: text
//   }
// }


// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//     dispatch({ type: types.LOGIN_USER });
    
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => dispatch(loginUserSuccess(user)))
//         .catch((e) => {
//           console.log(e);
//           dispatch(loginUserFail())
//         })
//   }
// }

// const loginUserFail = () => {
//   return { type: types.LOGIN_USER_FAIL }
// }

// const loginUserSuccess = (user) => {
//   console.log(user)
//   return {
//     type: types.LOGIN_USER_SUCCESS,
//     data: user
//   }

//   Actions.home();
// }

