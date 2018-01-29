// General api to acces data from web
import ApiConstants from './ApiConstants';
export default function api(path, params, method) {
    let options;
    options = Object.assign(
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'token d5d21fe261e11dbe5b10abe33136fab81d002b05'
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
