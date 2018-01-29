import Api from '@api';
import ApiConstants from '../ApiConstants';

let type = '+type:user+in:login';

export default function searchUsers(searchString) {
    return Api(
        ApiConstants.SEARCH_USERS + '?q=' + searchString + type,
        null,
        'get',
        null
    );
}
