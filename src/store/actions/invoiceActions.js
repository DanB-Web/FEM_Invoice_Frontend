import axios from 'axios'

import { BACKEND_URL } from '../constants/index'

import {
  GET_INVOICES_REQUEST,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_FAILURE,
  // INVOICE_STATUS_REQUEST,
  // INVOICE_STATUS_SUCCESS,
  // INVOICE_STATUS_FAILURE
} from '../constants/invoiceConstants'

export const getInvoices = () => async (dispatch, getState) => {

  try {
    dispatch({type: GET_INVOICES_REQUEST})

    const config = {
      headers: {
        'Content-Type' : 'application/json',
      }
    }

    const { data } = await axios.get(`${BACKEND_URL}/invoices/allinvoices`, config)

    dispatch({
      type: GET_INVOICES_SUCCESS,
      payload: data
    })

  } catch (e) {
    dispatch({type: GET_INVOICES_FAILURE})
  }
}

// export const invoiceStatus = (id) => async (dispatch, getState) => {
//   try {
//     //dispatch({type: INVOICE_STATUS_REQUEST})

//     const config = {
//       headers: {
//         'Content-Type' : 'application/json',
//       }
//     }

//     const { data } = await axios.post(`${BACKEND_URL}/invoices/invoiceStatus/${id}`, config)
//     //dispatch({type: INVOICE_STATUS_SUCCESS})
//     return data

//   } catch (e) {
//     //dispatch({type: INVOICE_STATUS_FAILURE})
//   }
// }

export const deleteInvoice = (id) => async (dispatch, getState) => {

}

