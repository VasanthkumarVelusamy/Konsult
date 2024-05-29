import express from 'express'
import router from './router.mjs'
import { protect } from './modules/auth.mjs'
import { createNewUser, signin } from './handlers/user.mjs'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({"message": "hello"})
})

app.use('/api', protect, router)
app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req, res, next) => {
    if (err.type === 'input') {
        res.status(400)
        res.json({message: `invalid input: ${err}`})
    } else {
        res.status(500)
        res.json({message: `oops! its on us: ${err} `})
    }
})

export default app;