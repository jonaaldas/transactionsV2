import axios from 'axios'

export const getTransactionsRequest = async () => {
  return await axios.get('/transactions')
}

export const createTransactionsRequest = async (post) => {
  return await axios.post('/transactions', post)
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete('/transactions/' + id)
}

export const getSingleTransactionToEditRequest = async (id) => {
  return await axios.get('/transactions/edit/' + id)
}

export const getSingleTransactionToViewRequest = async (id) => {
  return await axios.get('/transactions/' + id)
}

export const editTransactionRequest = async (id, newFields) => {
  return await axios.put('/transactions/' + id, newFields)
}

