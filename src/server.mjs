import express from 'express'
import router from './router.mjs'

const app = express()

app.get('/', (req, res) => {
    res.json({"message": "hello"})
})

app.use('/api', router)

export default app;