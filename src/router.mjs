import {Router} from 'express'
import { handleInputErrors } from './modules/middleware.mjs'
import { createConsultationValidator, updateConsultationValidator, updateUserValidator } from './modules/validators.mjs'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res)=>{res.json({message: "welcome"}) })
router.get('/user/:id', ()=>{})
router.put('/user/:id', updateUserValidator(), handleInputErrors, (req, res)=>{})
router.delete('user/:id', ()=>{})

/**
 * Consultation
 */
router.get('/consultation', ()=>{})
router.get('/consultation/:id', ()=>{})
router.post('/consultation', createConsultationValidator(), handleInputErrors, ()=>{})
router.put('/consultation/:id', updateConsultationValidator(), handleInputErrors, ()=>{})
router.delete('/consulation/:id', ()=>{})

export default router