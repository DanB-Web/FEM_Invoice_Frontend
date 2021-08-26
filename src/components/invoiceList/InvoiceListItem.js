import { Link } from 'react-router-dom'

const InvoiceListItem = ({invoice}) => {
  return (
    <li className='invoice-list-item'>
      <p>{invoice.description}</p>
      <p>{invoice.status}</p>
      <Link to={`/invoice/${invoice.id}`}>LINK</Link>
    </li>
  )
}

export default InvoiceListItem