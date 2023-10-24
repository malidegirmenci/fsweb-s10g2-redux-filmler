
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';
const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {



    switch (action.type) {
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        case ADD_FAVORITE:
            let movie;
            let foundedMovie;
            if (action.payload) {
                movie = action.payload
                //console.log("id", movie.id)
                foundedMovie = state.favorites.find(item => (movie.id === item.id))
                //console.log("foundedMovie: ",foundedMovie);
            } else {
                console.log("yet not loaded payload!");
            }
            return {
                ...state,
                favorites: foundedMovie !== undefined ? [...state.favorites] : [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;