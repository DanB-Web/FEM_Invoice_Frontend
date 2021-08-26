import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getInvoices } from '../store/actions/invoiceActions'

import InvoiceListHeader from '../components/invoiceList/InvoiceListHeader'
import InvoiceList from '../components/invoiceList/InvoiceList'

const Invoices = () => {

  const dispatch = useDispatch()

  const { loading, error, invoices } = useSelector(state => state.invoices)

  useEffect(() => {
    dispatch(getInvoices())
  }, [dispatch])

  return (
    <div className='invoices-container'>
      <InvoiceListHeader/>
      <InvoiceList invoices={invoices} loading={loading} error={error}/>
    </div>
  )
}

export default Invoices