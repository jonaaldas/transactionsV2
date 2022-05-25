import {
  useContext,
  createContext,
  useState,
  useEffect
} from 'react'
import {
  getTransactionsRequest,
  createTransactionsRequest,
  archiveTransactionRequest,
  deleteTransactionRequest,
  getSingleTransactionToEditRequest,
  editTransactionRequest,
  getSingleTransactionToViewRequest,
  getAllArchivedTransactionsRequest,
  restoreASingleTransactionRequest
} from '../api/api';
import {useNavigate} from 'react-router-dom' 

// initial context
export const TransacionsContext = createContext();

// my own hook because i do not want to import all the time 
export function useTransactions() {
  const context = useContext(TransacionsContext)
  return context
}


export function TransacionsContainers({children}) {
  const navigae = useNavigate() 
  // initial state for the transacionts from data base
  const [tran, setTran] = useState([]) 
  // inital state from archive tran fomr database
  const [archivedTran, setArchivedTran] = useState([])
  // filtered state for buttons
  const [filteredItems, setFilteredItems] = useState([])
  // flag to compare buttons
  const [activeButtons, setActiveButtons] = useState('')

    // this will run once and will get all the transactions 
  useEffect(() => {
    getTransactions()
    getAllArchivedTransactions()
  },[])

  const getTransactions = async () => {
    const res = await getTransactionsRequest()
    setTran(res.data)
    setFilteredItems(res.data)
  }

  const createTransactions = async (post) => {
    const res = await createTransactionsRequest(post)
    setTran([...tran, res.data])
  }

  const archiveTransactions = async (id) => {
    const res = await archiveTransactionRequest(id)
    if (res.status === 204) {
      setTran(tran.filter(tran => tran._id !== id))
    }
  }
  
  const deleteTransaction = async (id) => {
    const res = await deleteTransactionRequest(id)
    if (res.status === 204) {
      setTran(tran.filter(tran => tran._id !== id))
    }
  }

  // get single transactions to edit
  const getSingleTransactionToEdit = async (id) => {
    const res = await getSingleTransactionToEditRequest(id)
    return res.data
  }

  // get single transation to view
  const getSingleTransactionToView = async (id) => {
    const res = await getSingleTransactionToViewRequest(id)
    return res.data
  }

  const editTransaction = async (id, transaction) => {
    const res = await editTransactionRequest(id, transaction)
    setTran(tran.map(tran => (tran._id === id ? res.data : tran)))
  }

  const handleChecked = async (qId, tranId) => {
    const res1 = await getSingleTransactionToEditRequest(tranId)
      if (res1.data.transaction.toLowerCase() === 'buyer') {
        res1.data.buyer.buyerq.map(question => {
          if (question._id === qId) {
            if (question.checked === true) {
              return question.checked = false
            } else if (question.checked === false) {
              return question.checked = true
            }
          }
          return res1.data
        })
        const res2 = await editTransactionRequest(tranId, res1.data)
        setTran(tran.map(tran => (tran._id === tranId ? res2.data : tran)))
      } else if(res1.data.transaction.toLowerCase() === 'seller'){
        res1.data.seller.sellerq.map(question => {
          if (question._id === qId) {
            if (question.checked === true) {
              return question.checked = false
            } else if (question.checked === false) {
              return question.checked = true
            }
          }
          return res1.data
        })
        const res2 = await editTransactionRequest(tranId, res1.data)
        setTran(tran.map(tran => (tran._id === tranId ? res2.data : tran)))
      }
  }

  const getAllArchivedTransactions = async () => {
    const res = await getAllArchivedTransactionsRequest()
    setArchivedTran(res.data)    
  }

  const restoreASingleTransaction = async (id) => {
    const res = await restoreASingleTransactionRequest(id)
    if (res.status === 204) {
      navigae('/')
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return <TransacionsContext.Provider value = {
      {
        tran,
        archivedTran,
        filteredItems,
        setFilteredItems,
        activeButtons,
        setActiveButtons,
        setTran,
        getTransactions,
        createTransactions,
        archiveTransactions,
        deleteTransaction,
        getSingleTransactionToView,
        editTransaction,
        getSingleTransactionToEdit,
        handleChecked,
        getAllArchivedTransactions,
        restoreASingleTransaction,
        refreshPage
      }
    } > {
      children
    } </TransacionsContext.Provider>
}