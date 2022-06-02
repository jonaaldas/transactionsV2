import axios from 'axios'

export const getTransactionsRequest = async () => {
  return await axios.get('https://transactions-managment.herokuapp.com/api/transactions')
}

export const createTransactionsRequest = async (post) => {
  return await axios.post('https://transactions-managment.herokuapp.com/api/transactions/add/', post)
}

export const archiveTransactionRequest = async (id) => {
  return await axios.delete('https://transactions-managment.herokuapp.com/api/transactions/' + id)
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete('https://transactions-managment.herokuapp.com/api/transactions/delete/' + id)
}

export const getSingleTransactionToEditRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/api/transactions/edit/' + id)
}

export const getSingleTransactionToViewRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/api/transactions/' + id)
}

export const editTransactionRequest = async (id, newFields) => {
  return await axios.put('https://transactions-managment.herokuapp.com/api/transactions/' + id, newFields)
}


export const getAllArchivedTransactionsRequest = async () => {
  return await axios.get('https://transactions-managment.herokuapp.com/api/transactions/archived')
}

export const restoreASingleTransactionRequest = async (id) => {
  return await axios.get('https://transactions-managment.herokuapp.com/api/transactions/restore/archived/' + id)
}