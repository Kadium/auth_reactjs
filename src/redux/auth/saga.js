import {all, takeEvery, put, call, fork} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {getToken, clearToken} from '../../helpers/utility';
import actions from './actions';
import AuthHelper from '../../helpers/authHelper';
import notification from '../../components/notification';
import RouterHelper from "../../helpers/routerHelper";

export function* loginRequest() {
    yield takeEvery('LOGIN_REQUEST', function* ({payload}) {
        const {userInfo} = payload;
        const result = yield call(AuthHelper.login, userInfo);
        if (result.status !== 200) {
            const msg = "erreur " + result.status + " : " + result.body.message;
            notification('error', msg);
        } else {
            yield put({
                type: actions.LOGIN_SUCCESS,
                payload: result,
                self: result.self,
                profile: 'Profile'
            });
            localStorage.setItem('id_token', (result.token));
            if (result.self.status.type === 'seller') {
                yield put(push('/app/shop/' + result.self._id));
            } else {
                yield put(push('/app'));
            }
        }
    });
}

export function* signupRequest() {
    yield takeEvery('SIGNUP_REQUEST', function* ({payload}) {
        const {userInfo} = payload;
        const result = yield call(AuthHelper.signup, userInfo);
        if (result.status !== 200) {
            const msg = "erreur " + result.status + " : " + result.body;
            notification('error', msg);
        } else {
            notification('success', result.message);
            yield put({
                type: actions.SIGNUP_SUCCESS,
            });
            yield put(push('/signin'));
        }
    });
}

export function* sendEmailRequest() {
    yield takeEvery('SEND_EMAIL_REQUEST', function* ({payload}) {
        const {data} = payload;
        const result = yield call(AuthHelper.sendEmail, data);
        if (result.status === false) {
            const msg = "erreur " + result.status + " : " + result.body;
            notification('error', msg);
        } else {
            yield put({
                type: actions.SEND_EMAIL_SUCCESS
            });
            notification('success', "Email envoyé.");
        }
    });
}

export function* resetPasswordRequest() {
    yield takeEvery('RESET_PASSWORD_REQUEST', function* ({payload}) {
        const {data} = payload;
        const result = yield call(AuthHelper.resetpassword, data);
        if (result.status === false) {
            const msg = "erreur " + result.status + " : " + result.body;
            notification('error', msg);
        } else {
            yield put({
                type: actions.LOGIN_SUCCESS,
            });
            yield put(push('/signin'));
        }
    });
}

export function* loginError() {
    yield takeEvery(actions.LOGIN_ERROR, function* () {
    });
}

export function* logout() {
    yield takeEvery(actions.LOGOUT, function* () {
        clearToken();
        yield put(push('/'));
    });
}

export function* checkAuthorization() {
    yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
        const token = getToken().get('idToken');
        if (token) {
            yield put({
                type: actions.LOGIN_SUCCESS,
                token,
                profile: 'Profile'
            });
        }
    });
}

export function* getSelfRequest() {
    yield takeEvery('GET_SELF_REQUEST', function* () {
        const result = yield call(AuthHelper.getSelf);
        if (!result.user) {
            const msg = "erreur " + result.status + " : " + result.body.message;
            notification('error', msg);
        } else {
            yield put({
                type: actions.GET_SELF_SUCCESS,
                payload: result,
                self: result,
            });
        }
    });
}

export function* getUsersRequest() {
    yield takeEvery('GET_USERS_REQUEST', function* () {
        const result = yield call(AuthHelper.getUsers);
        if (result.lenght === 0) {
            const msg = "erreur " + result.status + " : " + result.body.message;
            notification('error', msg);
        } else {
            yield put({
                type: actions.GET_USERS_SUCCESS,
                payload: result,
                allUsers: result,
            });
        }
    });
}

export function* putSelfRequest() {
    yield takeEvery('PUT_SELF_REQUEST', function* ({payload}) {
        const {data} = payload;
        const result = yield call(AuthHelper.putSelf, data);
        if (result.status !== 200) {
            const msg = "erreur " + result.status + " : " + result.body.message;
            notification('error', msg);
        } else {
            notification('success', 'Profile updated');
            yield put({
                type: actions.GET_SELF_REQUEST,
            });
        }
    });
}

export function* GetUserByIdRequest() {
    yield takeEvery('GET_USER_BY_ID_REQUEST', function* ({payload}) {
        const {data} = payload;
        const result = yield call(RouterHelper.getUserById, data);
        if (result.status) {
            const msg = "erreur " + result.status + " : " + result.body;
            notification('error', msg);
        } else {
            yield put({
                type: actions.GET_USER_BY_ID_SUCCESS,
                payload: result,
                user: result.user
            });
        }
    });
}

export function* postForgotPasswordRequest() {
    yield takeEvery('FORGOT_PASSWORD_REQUEST', function* ({payload}) {
        const {data} = payload;
        const result = yield call(RouterHelper.postForgotPassword, data);
        if (result.status) {
            const msg = "erreur " + result.status + " : " + result.body.message;
            notification('error', msg);
        } else {
            notification('success', 'Demande de réinitialisation envoyé par mail.');
            yield put({
                type: actions.FORGOT_PASSWORD_SUCCESS
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(checkAuthorization),
        fork(loginRequest),
        fork(signupRequest),
        fork(loginError),
        fork(logout),
        fork(sendEmailRequest),
        fork(resetPasswordRequest),
        fork(getSelfRequest),
        fork(putSelfRequest),
        fork(getUsersRequest),
        fork(GetUserByIdRequest),
        fork(postForgotPasswordRequest),
    ]);
}
