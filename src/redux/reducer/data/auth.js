import update from "react-addons-update";
import { UPDATE_TOKEN, UPDATE_USER_ID, UPDATE_LOGIN } from "./../const/auth";
const initialState = {
 
  userID: null,
  userName: null,
  loginState: false,
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return update(state, {
        // accessToken: { $set: action.accessToken },
        // refreshToken: { $set: action.refreshToken },
        userID: { $set: action.userID },
        userName: { $set: action.userName },
        loginState: { $set: action.loginState },
      });
    default:
      return state;
  }
};

