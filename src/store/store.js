import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { usersReducer } from './reducers/userReducers';
import { getInvoicesReducer } from './reducers/invoiceReducers';

import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  //user: usersReducer,
  invoices: getInvoicesReducer
});

// const userInfoFromStorage = localStorage.getItem('invoiceUser') ? JSON.parse(localStorage.getItem('invoiceUSer')) : [];

const initialState = {
  //user: userInfoFromStorage,
  invoices: [],
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;