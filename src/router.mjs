import {Router} from 'express'
import { body, validationResult } from 'express-validator'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res)=>{res.json({message: "welcome"}) })
router.get('/user/:id', ()=>{})
router.put('/user/:id', body('name').isString(), body('isOpenToConsult').isBoolean(), (req, res)=>{
    const errors = validationResult(req)
    res.json({errors: errors.array()})
})
router.delete('user/:id', ()=>{})

/**
 * Consultation
 */
router.get('/consultation', ()=>{})
router.get('/consultation/:id', ()=>{})
router.post('/consultation', [body('consultantId').isString(), body('consulteeId').isString(), body('mode').exists, body('area').exists], ()=>{})
router.put('consultation/:id', ()=>{})
router.delete('consulation/:id', ()=>{})

export default router