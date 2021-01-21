const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SEND_EMAIL_REQUEST: 'SEND_EMAIL_REQUEST',
  SEND_EMAIL_SUCCESS: 'SEND_EMAIL_SUCCESS',
  RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_SELF_REQUEST: 'GET_SELF_REQUEST',
  GET_SELF_SUCCESS: 'GET_SELF_SUCCESS',
  PUT_SELF_REQUEST: 'PUT_SELF_REQUEST',
  GET_USER_BY_ID_REQUEST: 'GET_USER_BY_ID_REQUEST',
  GET_USER_BY_ID_SUCCESS: 'GET_USER_BY_ID_SUCCESS',
  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',

  checkAuthorization: () => ({type: actions.CHECK_AUTHORIZATION}),
  login: payload => ({
    type: actions.LOGIN_REQUEST,
    payload
  }),
  signup: payload => ({
    type: actions.SIGNUP_REQUEST,
    payload
  }),
  logout: () => ({
    type: actions.LOGOUT
  }),
  sendEmail: payload => ({
    type: actions.SEND_EMAIL_REQUEST,
    payload
  }),
  resetPassword: payload => ({
    type: actions.RESET_PASSWORD_REQUEST,
    payload
  }),
  getSelf: payload => ({
    type: actions.GET_SELF_REQUEST,
    payload
  }),
  getUsers: payload => ({
    type: actions.GET_USERS_REQUEST,
    payload
  }),
  putSelf: payload => ({
    type: actions.PUT_SELF_REQUEST,
    payload
  }),
  getUserById: payload => ({
    type: actions.GET_USER_BY_ID_REQUEST,
    payload
  }),
  forgotPassword: payload => ({
    type: actions.FORGOT_PASSWORD_REQUEST,
    payload
  }),
};
export default actions;
