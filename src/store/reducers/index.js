import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';
export const reducers = combineReducers({
    movies:movieReducer,
    favorites:favoriteReducer,
});
