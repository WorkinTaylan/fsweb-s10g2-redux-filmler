import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import FavoritesReducer from "./FavoritesReducer";

const rootReducer = combineReducers({
     movieReducer,
     FavoritesReducer,
  });
  
export default rootReducer;
//export default movieReducer;