import merge from 'lodash.merge'
import development from './development.mjs'
import testing from './testing.mjs'
import production from './production.mjs'

const environment = process.env.NODE_ENV || "production"

let envConfig

if (environment === 'production') {
    envConfig = production
} else if (environment === 'testing') {
    envConfig = testing
} else {
    envConfig = development
}

export default merge({
    environment,
    port: 3051,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DATABASE_URL
    }
}, envConfig)