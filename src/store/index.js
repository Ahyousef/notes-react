import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; //optional
import productsReducer from "./products-reducer";
import categoriesReducer from "./categories-reducer";

// combine reducers is not necessary when you only have 1 reducer

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
