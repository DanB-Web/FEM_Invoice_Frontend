import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteInvoice } from '../../utils/rest'
import { BeatLoader } from 'react-spinners'

const DeleteModal = ({history, setDeleteModal, id}) => {

  const [deleteError, setDeleteError] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const deleteHandler = async () => {
    try {
      setDeleteLoading(true)
      const status = await deleteInvoice(id)
      setDeleteLoading(false)
      if (status === 204) {
        history.push('/')
      } else {
        setDeleteError(true)
      }
    } catch (e) {
      setDeleteError(true)
    } 
  }

  const closeModalHandler = () => {
    setDeleteModal(false)
  }

  return (
    <div className='delete-invoice-container'>
      {deleteLoading ?
        <div className='delete-invoice-loader'>
          <BeatLoader size={25} color={`#9277FF`}></BeatLoader>
        </div> :
        <div className='delete-invoice'>
        {!deleteError ? <p>Confirm delete {id}</p> : null}
        {deleteError ? <p>Delete error...</p> : null}
        <button className='btn infoBtn' onClick={closeModalHandler}>Cancel</button>
        {!deleteError ? <button className='btn deleteBtn' onClick={deleteHandler}>Delete</button> : null}
      </div>
      }
    </div>
  )
}

export default withRouter(DeleteModal)