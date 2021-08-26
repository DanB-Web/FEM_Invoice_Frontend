import InvoiceListItem from './InvoiceListItem'

const InvoiceList = ({invoices, loading, error}) => {

  if (loading) return (
    <div>Loading...</div>
  )

  if (error) return (
    <div>Error...</div>
  )

  if (invoices && invoices.length === 0) return (
    <div>No invoices...</div>
  )

  if (invoices) return (
    <div>
    <ul>
    {invoices.map(invoice => (
        <InvoiceListItem key={invoice.id} invoice={invoice}/>
      ))}
    </ul>
    </div>
  )

  return null
}

export default InvoiceList