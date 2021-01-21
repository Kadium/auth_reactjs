import SuperFetch from './superFetch';

class AuthHelper {

    login = async userInfo => {
        if (!userInfo.email || !userInfo.password) {
            return {error: 'Veuillez remplir les champs'};
        }
        try {
            return await SuperFetch.post('login', userInfo).then(response => {
                return response;
            });
        } catch (err) {
            console.log("err login");
            return err;
        }
    };

    signup = async userInfo => {
        try {
            return await SuperFetch.post('api/users', userInfo).then(response => {
                return response;
            });
        } catch (err) {
            console.log("err signup");
            return err;
        }
    };

    sendEmail = async data => {
        try {
            return await SuperFetch.post('login/forgotpassword', data).then(response => {
                console.log("response : ", response);
                return response;
            });
        } catch (err) {
            console.log("sendEmail");
            return err;
        }
    };

    resetpassword = async data => {
        try {
            return await SuperFetch.put('login/resetpassword', data).then(response => {
                return response;
            });
        } catch (err) {
            console.log("resetpassword");
            return err;
        }
    };

    checkExpirity = token => {
        if (!token) {
            return {
                error: 'not matched',
            };
        } else {
            return {
                token
            };
        }
    };

    getSelf = async () => {
        try {
            return await SuperFetch.get('api/users/self').then(response => {
                return response;
            });
        } catch (err) {
            console.log("getSelf");
            return err;
        }
    };

    getUsers = async () => {
        try {
            return await SuperFetch.get('api/users').then(response => {
                return response;
            });
        } catch (err) {
            console.log("getUsers");
            return err;
        }
    };

    putSelf = async data => {
        try {
            return await SuperFetch.put('api/users/self', data).then(response => {
                return response;
            });
        } catch (err) {
            console.log("putSelf");
            return err;
        }
    };
}

export default new AuthHelper();
