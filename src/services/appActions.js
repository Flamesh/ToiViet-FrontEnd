import { UPDATE_LOGIN } from "redux/reducer/const/auth";

export function dispatchLogin(res) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_LOGIN,
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      userID: res.data.userID,
      userName: res.data.userName,
      loginState: false,
    });
  };
}

// export function dispatchMobile(state) {
//   return (dispatch) => {
//     dispatch({
//       type: UPDATE_MOBILE_STATUS,
//       mobileStatus: state,
//     });
//   };
// }
// export function loginByRefreshToken(self, refreshToken_send) {
//   return (dispatch) => {
//     const header = {
//       client_id: client_id,
//       secret: secret,
//     };
//     const data = {
//       refreshToken: refreshToken_send,
//     };
//     _post(data, api_login_by_refreshToken, header, auth_api)
//       .then((res) => {
//         localStorage.setItem("refreshToken", res.data.refreshToken);
//         localStorage.setItem("accessToken", res.data.accessToken);
//         dispatch({
//           type: UPDATE_TOKEN,
//           accessToken: res.data.accessToken,
//           refreshToken: res.data.refreshToken,
//           userID: res.data.userID,
//           login_state: true,
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: UPDATE_TOKEN,
//           accessToken: null,
//           refreshToken: null,
//           userID: null,
//           login_state: false,
//         });
//       });
//   };
// }

// export function loadAllData() {
//   return (dispatch) => {
//     Promise.all([

//     ]).then(() => {
//       dispatch({
//         type: HAVE_DATA,
//         haveData: true,
//       });
//     });
//   };
// }
