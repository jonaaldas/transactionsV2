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
import {protect} from '../middleware/authMiddleware.js'
const router = Router()

// show all posts
router.get('/transactions',protect, getTransactions)

// create a new transaction
router.post('/transactions/add', protect, createTransactions)

// // update transaction
router.put('/transactions/:id', protect,updateTransactions)

// // archive transaction
router.delete('/transactions/:id', protect, archiveTransaction)

// delete from DB for good
router.delete('/transactions/delete/:id', protect, deleteTransactionForGood)

// // only get one transaction
router.get('/transaction/:id',protect, getTransaction)

// get all archive transactions
router.get('/transactions/archived',protect, getArchivedTransactions)

// restore data
router.get('/transactions/restore/archived/:id',protect, restoreArchivedTransactions)

export default router