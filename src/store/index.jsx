import { createStore, combineReducers } from 'redux';
import categoriesReducer from './ categories/ categories';
import productsReducer from './products';

const rootReducer = combineReducers({
  categories: categoriesReducer, 
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;