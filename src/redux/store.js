import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {cartReducer} from './cart/CartReducer';
import {favouritesReducer} from './favourites/FavouritesReducer';
import {userReducer} from './user/userReducer';
import {logger} from 'redux-logger';


const rootReducer = combineReducers({cart: cartReducer, favourites: favouritesReducer, user: userReducer});

const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;