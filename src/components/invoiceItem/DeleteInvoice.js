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
          <BeatLoader size={25} color={`#7e88c3`}></BeatLoader>
        </div> :
        <div className='delete-invoice'>
        {!deleteError ? <div><h2>Confirm Deletion</h2><p>Are you sure you want to delete {id}? This action cannot be undone</p></div> : null}
        {deleteError ? <p>Delete error...</p> : null}
        <div className='delete-invoice-buttons'>
          <button className='btn infoBtn' onClick={closeModalHandler}>Cancel</button>
          {!deleteError ? <button className='btn deleteBtn' onClick={deleteHandler}>Delete</button> : null}
        </div>
        
      </div>
      }
    </div>
  )
}


export default withRouter(DeleteModal)