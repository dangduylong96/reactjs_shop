import { combineReducers } from 'redux';

import isLoginReducer from './isLoginReducer';
import isLoadingReducer from './isLoadingReducer';

const reducer= combineReducers({
    isLogin: isLoginReducer,
    isLoading: isLoadingReducer
});
export default reducer;