// General api to acces data from web
import ApiConstants from './ApiConstants';
export default function api(path, params, method) {
    let options;
    options = Object.assign(
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        },
        { method: method },
        params ? { body: JSON.stringify(params) } : null
    );

    return fetch(ApiConstants.BASE_URL + path, options)
        .then(resp => resp.json())
        .then(json => json)
        .catch(error => error);
}
