import { combineReducers, createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { blogsReducer } from "./reducers/blogs.reducer";
import { categoriesReducer } from "./reducers/categories.reducer";
import { usersReducer } from "./reducers/users.reducer";





const rootReducer = combineReducers({
  blogs: blogsReducer,users:usersReducer,categories:categoriesReducer

});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
