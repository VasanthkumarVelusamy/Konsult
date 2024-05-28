import {Router} from 'express'
import { handleInputErrors } from './modules/middleware.mjs'
import { createConsultationValidator, updateConsultationValidator, updateUserValidator } from './modules/validators.mjs'
import { getUser, getUsers, updateUser } from './handlers/user.mjs'
import { createConsultation, updateConsultation } from './handlers/consultation.mjs'

const router = Router()

/**
 * User
 */
router.get('/users', getUsers)
router.get('/user', getUser)
router.put('/user', updateUserValidator(), handleInputErrors, updateUser)
router.delete('user/:id', ()=>{})

/**
 * Consultation
 */
router.get('/consultation', ()=>{})
router.get('/consultation/:id', ()=>{})
router.post('/consultation', createConsultationValidator(), handleInputErrors, createConsultation)
router.put('/consultation/:id', updateConsultationValidator(), handleInputErrors, updateConsultation)
router.delete('/consulation/:id', ()=>{})

export default router