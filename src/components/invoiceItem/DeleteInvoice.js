import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteInvoice } from '../../utils/rest'

const DeleteModal = ({history, setDeleteModal, id}) => {

  //const router = useRouter()

  const [deleteError, setDeleteError] = useState(false)

  const deleteHandler = async () => {
    try {
      const status = await deleteInvoice(id)
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
    <div>
      <div>
        {!deleteError ? <p>Confirm delete {id}</p> : null}
        {deleteError ? <p>Delete error...</p> : null}
        <button onClick={closeModalHandler}>Cancel</button>
        {!deleteError ? <button onClick={deleteHandler}>Delete</button> : null}
      </div>
    </div>
  )
}

export default withRouter(DeleteModal)