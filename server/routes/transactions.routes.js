import {
  Router
} from 'express'

import {
  getTransactions,
  createTransactions,
  updateTransactions,
  deleteTransaction,
  getTransaction
} from '../controllers/transactions.controllers.js'

const router = Router()

// show all posts
router.get('/transactions', getTransactions)

// create a new client
router.post('/transactions', createTransactions)

// // update client
router.put('/transactions/:id', updateTransactions)

// // delete clients
router.delete('/transactions/:id', deleteTransaction)

// // only get one client
router.get('/transactions/:id', getTransaction)

export default router