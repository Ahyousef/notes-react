import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //optional
import productsReducer from "./products-reducer";
import categoriesReducer from "./categories-reducer";
import cartReducer from "./cart-reducer";

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
