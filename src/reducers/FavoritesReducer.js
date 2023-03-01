import { TOGGLE_FAVORITES,ADD_FAVORITE, REMOVE_FAVORITE  } from "../actions/favoritesActions";

const initialState = {
    favorites:[],
    displayFavorites:true
  }
  
  const FavoritesReducer = (state=initialState, action) => {
    switch (action.type) {
      case TOGGLE_FAVORITES:
        return {
          ...state,
          displayFavorites: !state.displayFavorites
        }
        case ADD_FAVORITE:
          let favoriteMovie={
          id: action.payload.id,
          title:action.payload.title,
          }
          return {
            ...state,
            favorites:[...state.favorites, favoriteMovie]
          }
        case REMOVE_FAVORITE:
          return {
            favorites:state.favorites.filter(fav=>action.payload!==fav.id)
          }  
      default:
        return state;
    }
  }
  
  export default FavoritesReducer;