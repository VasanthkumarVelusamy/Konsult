import {Router} from 'express'
import { body, oneOf, validationResult } from 'express-validator'
import { handleInputErrors } from './modules/middleware.mjs'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res)=>{res.json({message: "welcome"}) })
router.get('/user/:id', ()=>{})
router.put('/user/:id', body('name').isString().optional(), body('isOpenToConsult').isBoolean().optional(), oneOf('status', [body('AI'), body('WEB'), body('MOBILE')]).optional(), handleInputErrors, (req, res)=>{ })
router.delete('user/:id', ()=>{})

/**
 * Consultation
 */
router.get('/consultation', ()=>{})
router.get('/consultation/:id', ()=>{})
router.post('/consultation', [body('consultantId').isString().exists(), body('consulteeId').isString().exists(), body('mode').exists(), body('area').exists()], handleInputErrors, ()=>{})
router.put('consultation/:id', [body('consultantId').isString().optional(), body('consulteeId').isString().optional(), body('mode').optional(), body('area').optional()], handleInputErrors, ()=>{})
router.delete('consulation/:id', ()=>{})

export default router