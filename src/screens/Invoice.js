import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import InvoiceHeader from '../components/invoiceItem/InvoiceHeader'

const Invoice = ({match :{ params }}) => {

  const [invoice, setInvoice] = useState({})
  const { invoices } = useSelector(state => state.invoices)

  useEffect(() => {
    const data = invoices.filter(invoice => invoice.id === params.id)
    setInvoice(data[0])
  }, [invoices, params.id])


  return (
    <div>
      <div><Link to='/'>Back</Link></div>
      <InvoiceHeader invoice={invoice}/>
      <div>{invoice.id}</div>
    </div>
  )
}

export default Invoice