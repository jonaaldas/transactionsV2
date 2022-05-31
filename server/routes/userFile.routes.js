import {
  Router
} from 'express'
import {registerUser, logInUser, getUserData} from '../controllers/userFile.controllers.js'
import {protect} from '../middleware/authMiddleware.js'
const router = Router()

router.post('/register', registerUser)
router.post('/login', logInUser)
router.get('/transactions/me', getUserData)


export default router