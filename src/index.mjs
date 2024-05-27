import app from './server.mjs'
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(3001, () => {
    console.log("Listening on localhost:3001")
})