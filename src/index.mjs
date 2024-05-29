import app from './server.mjs'
import * as dotenv from 'dotenv'
import conf from './config/index.mjs'

dotenv.config()

app.listen(conf.port, () => {
    console.log(`Listening on localhost:${conf.port}`)
})