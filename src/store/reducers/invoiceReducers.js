import {
  GET_INVOICES_REQUEST,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_FAILURE
} from '../constants/invoiceConstants.js';

export const getInvoicesReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_INVOICES_REQUEST:
      return {
        loading: true
      }
    case GET_INVOICES_SUCCESS:
      return {
        loading: false,
        invoices: action.payload
      }
    case GET_INVOICES_FAILURE:
      return {
        loading: false,
        error: action.payload
      }
    default: 
      return state;
  }
}
