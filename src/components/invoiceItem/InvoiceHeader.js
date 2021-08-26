import { useState, useEffect } from 'react'
import { invoiceStatus } from '../../utils/rest'
import DeleteInvoice from './DeleteInvoice'
import '../../styles/components/invoiceHeader.scss'

const InvoiceHeader = ({invoice}) => {

  const [status, setStatus] = useState('')
  const [statusError, setStatusError] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const statusHandler = async () => {
    try {
      const data = await invoiceStatus(invoice.id)
      setStatus(data.status)
    } catch (e) {
      setStatusError(true)
    } 
  }

  const deleteModalHandler = () => {
    setDeleteModal(true)
  }

  useEffect(() => {
    setStatus(invoice.status)
  }, [invoice])

  if (deleteModal) {
    return <DeleteInvoice id={invoice.id} setDeleteModal={setDeleteModal}/>
  }

  return (
    <div className='invoice-header-container'>
      <p>Status: {status}</p>
      <div>
        <button>Edit</button>
        <button onClick={deleteModalHandler}>Delete</button>
        {statusError ? 
          <p>Error updating status</p> :
          <div>
            {status === 'pending' ? <button onClick={statusHandler}>Mark as Paid</button> : null}
            {status === 'paid' ? <button onClick={statusHandler}>Mark as Pending</button> : null}
          </div>
        }
      </div>
    </div>
  )
}

export default InvoiceHeader