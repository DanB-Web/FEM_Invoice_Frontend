import axios from 'axios'
import { BACKEND_URL } from '../store/constants/index'

export const invoiceStatus = async (id) => {
  try {
    const config = {
      headers: {
        'Content-Type' : 'application/json',
      }
    }
    const { data } = await axios.post(`${BACKEND_URL}/invoices/invoiceStatus/${id}`, config)
    return data
  } catch (e) {
    console.log(e)
  }
}

export const deleteInvoice = async (id) => {
  console.log('action')
  try {
    const config = {
      headers: {
        'Content-Type' : 'application/json',
      }
    }
    const {status} = await axios.delete(`${BACKEND_URL}/invoices/deleteInvoice/${id}`, config)
    return status
  } catch (e) {
    console.log(e)
  }
}