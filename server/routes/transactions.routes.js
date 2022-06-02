import {
  Router
} from 'express'

import {
  getTransactions,
  createTransactions,
  updateTransactions,
  archiveTransaction,
  getTransaction,
  getArchivedTransactions,
  restoreArchivedTransactions,
  deleteTransactionForGood
} from '../controllers/transactions.controllers.js'

const router = Router()

// show all posts
router.get('/api/transactions', getTransactions)

// create a new transaction
router.post('/api/transactions/add/', createTransactions)

// // update transaction
router.put('/api/transactions/:id', updateTransactions)

// // archive transactions
router.delete('/api/transactions/archive/:id/', archiveTransaction)

// delete from DB for good
router.delete('/api/transactions/delete/:id', deleteTransactionForGood)

// // only get one transaction
router.get('/api/transactions/edit/:id', getTransaction)

// get all archive transactions
router.get('/api/transactions/archived', getArchivedTransactions)

// restore data
router.get('/api/transactions/restore/archived/:id', restoreArchivedTransactions)

export default router