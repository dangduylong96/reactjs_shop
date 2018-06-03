import { combineReducers } from 'redux';

import testReducer from './testReducer';

const reducer= combineReducers({
    testReducer: testReducer
});
export default reducer;