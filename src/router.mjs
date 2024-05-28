import {Router} from 'express'

const router = Router()

/**
 * User
 */
router.get('/user', (req, res)=>{res.json({message: "welcome"}) })
router.get('/user/:id', ()=>{})
router.put('/user/:id', ()=>{})
router.delete('user/:id', ()=>{})

/**
 * Consultation
 */
router.get('/consultation', ()=>{})
router.get('/consultation/:id', ()=>{})
router.post('/consultation', ()=>{})
router.put('consultation/:id', ()=>{})
router.delete('consulation/:id', ()=>{})

export default router