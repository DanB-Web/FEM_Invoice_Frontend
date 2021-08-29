import InvoiceListItem from './InvoiceListItem'

const InvoiceList = ({filterView, loading, error}) => {

  if (loading) return (
    <div>Loading...</div>
  )

  if (error) return (
    <div>Error...</div>
  )

  if (filterView && filterView.length === 0) return (
    <div>No invoices...</div>
  )

  if (filterView) return (
    <div>
    <ul>
    {filterView.map(invoice => (
        <InvoiceListItem key={invoice.id} invoice={invoice}/>
      ))}
    </ul>
    </div>
  )

  return null
}

export default InvoiceList