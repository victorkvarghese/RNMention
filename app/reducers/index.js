/* class combines all th existing reducers in the app
 */
import * as userReducer from './userReducer';
import * as loadingReducer from './loadingReducer';

export default Object.assign(userReducer, loadingReducer);
