import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export const reducers = combineReducers({
    movies:movieReducer,
});
