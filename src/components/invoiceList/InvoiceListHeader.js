import {useState} from 'react'
import {ReactComponent as Plus} from '../../assets/icon-plus.svg'
import {ReactComponent as Down} from '../../assets/icon-arrow-down.svg'

const InvoiceListHeader = ({filterView}) => {

  const [showFilter, setShowFilter] = useState(false)

  const viewFiltersHandler = () => {
    setShowFilter(!showFilter)
  }

  const newInvoiceHandler = () => {

  }

  return (
    <div className='invoice-list-header-container'>
      <div className='invoice-list-header-title'>
        <h2>Invoices</h2>
        {filterView && filterView.length === 0 ? <p>No invoices</p> : null}
        {filterView && filterView.length === 1 ? <p>There is 1 invoice remaining</p> : null}
        {filterView && filterView.length > 1 ? <p>There are {filterView.length} invoices remaining</p> : null}
      </div>
      <div className='invoice-list-inputs'>
        <label>Filter by status:</label>
        <Down   
          className='invoice-list-filter-btn'
          onClick={viewFiltersHandler}
          />
        <button 
          className='btn purpleBtn'
          onClick={newInvoiceHandler}>
          <Plus className='invoice-list-add-button'/>
          New Invoice&nbsp;&nbsp;
        </button>
        {showFilter ? <InvoiceListFilter/> : null}
      </div>
    </div>
  )
}

const InvoiceListFilter = () => {
  return (
    <div className='invoice-list-filter-popup'>
      <div>
        <input type='checkbox'></input>
        <label>Draft</label>
      </div>
      <div>
        <input type='checkbox'></input>
        <label>Pending</label>
      </div>
      <div>
        <input type='checkbox'></input>
        <label>Paid</label>
      </div>
    </div>
  )
}

export default InvoiceListHeader