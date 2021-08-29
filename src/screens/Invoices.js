import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getInvoices } from '../store/actions/invoiceActions'

import InvoiceListHeader from '../components/invoiceList/InvoiceListHeader'
import InvoiceList from '../components/invoiceList/InvoiceList'

const Invoices = () => {

  const dispatch = useDispatch()

  const { loading, error, invoices } = useSelector(state => state.invoices)
  const[filterView, setFilterView] = useState([])

  useEffect(() => {
    dispatch(getInvoices())
  }, [dispatch])

  useEffect(() => {
    setFilterView(invoices)
  }, [invoices])

  return (
    <div className='invoices-container'>
      <InvoiceListHeader filterView={filterView}/>
      <InvoiceList filterView={filterView} loading={loading} error={error}/>
    </div>
  )
}

export default Invoices