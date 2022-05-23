import {
  Router
} from 'express'

import {
  getTransactions,
  createTransactions,
  updateTransactions,
  deleteTransaction,
  getTransaction,
  getArchivedTransactions,
  restoreArchivedTransactions,
  deleteTransactionForGood
} from '../controllers/transactions.controllers.js'

const router = Router()

// show all posts
router.get('/transactions', getTransactions)

// create a new transaction
router.post('/transactions/add', createTransactions)

// // update transaction
router.put('/transactions/:id', updateTransactions)

// // delete transaction
router.delete('/transactions/:id', deleteTransaction)

// delete from DB for good
router.delete('/transactions/delete/:id', deleteTransactionForGood)

// // only get one transaction
router.get('/transactions/edit/:id', getTransaction)

// only get one transaction to show
// router.get('/transactions/:id', getTransaction)

router.get('/transactions/archived', getArchivedTransactions)

// restore data
router.get('/transactions/restore/archived/:id', restoreArchivedTransactions)

export default router