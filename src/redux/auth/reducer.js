import actions from './actions';

const initState = {
    self: {},
    allUsers: [],
    user: {}
};

export default function authReducer(state = initState, action) {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return {...state, self: action.self};
        case actions.SIGNUP_SUCCESS:
            return {...state};
        case actions.SEND_EMAIL_SUCCESS:
            return {...state};
        case actions.RESET_PASSWORD_SUCCESS:
            return {...state};
        case actions.LOGOUT:
            return initState;
        case actions.GET_SELF_SUCCESS:
            return {...state, self: action.self};
        case actions.GET_USERS_SUCCESS:
            return {...state, allUsers: action.allUsers};
        case actions.GET_USER_BY_ID_SUCCESS:
            return {...state, user: action.user};
        case actions.FORGOT_PASSWORD_SUCCESS:
            return {...state};
        default:
            return state;
    }
}
