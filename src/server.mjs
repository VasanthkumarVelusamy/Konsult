import express from 'express'
import router from './router.mjs'
import { protect } from './modules/auth.mjs'
import { createNewUser, signin } from './handlers/user.mjs'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({"message": "hello"})
})

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('signin', signin)

export default app;