import {apiConfig} from '../settings';

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    return response.json().then(json => {
        return Promise.reject({
            status: response.status,
            ok: false,
            statusText: response.statusText,
            body: json
        });
    });
};

const parseJSON = response => {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
};

const handleError = error => {
    error.response = {
        status: 0,
        statusText:
            "Cannot connect. Please make sure you are connected to internet."
    };
    throw error;
};

const customHeader = () => ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('id_token') || undefined
});

const base = (method, url, data = {}) => {
    if (method === 'get') {
        return fetch(`${apiConfig.endPoint}${url}`, {
            method,
            headers: customHeader()
        })
            .catch(handleError) // handle network issues
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => {
                throw error;
            });
    } else {
        return fetch(`${apiConfig.endPoint}${url}`, {
            method,
            headers: customHeader(),
            body: JSON.stringify(data),
        })
            .catch(handleError) // handle network issues
            .then(checkStatus)
            .then(parseJSON)
            .catch(error => {
                throw error;
            });
    }

};

const SuperFetch = {};
['get', 'post', 'put', 'delete', 'patch'].forEach(method => {
    SuperFetch[method] = base.bind(null, method);
});
export default SuperFetch;
