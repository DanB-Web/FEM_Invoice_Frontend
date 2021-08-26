import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getInvoices } from '../store/actions/invoiceActions'

const Invoices = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInvoices())
  }, [dispatch])

  return (
    <div>Invoices</div>
  )
}

export default Invoices