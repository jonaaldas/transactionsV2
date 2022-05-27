import axios from 'axios'

export const auth0Request = async () => {
  return await axios.get('/')
}

export const getTransactionsRequest = async () => {
  return await axios.get('/transactions')
}

export const createTransactionsRequest = async (post) => {
  return await axios.post('/transactions/add', post)
}

export const archiveTransactionRequest = async (id) => {
  return await axios.delete('/transactions/' + id)
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete('/transactions/delete/' + id)
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


export const getAllArchivedTransactionsRequest = async () => {
  return await axios.get('/transactions/archived')
}

export const restoreASingleTransactionRequest = async (id) => {
  return await axios.get('/transactions/restore/archived/' + id)
}

