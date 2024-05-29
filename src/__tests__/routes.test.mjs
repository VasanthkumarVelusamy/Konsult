import app from '../server.mjs'
import supertest from 'supertest'

describe('GET /', ()=>{
    it('should get back some data', async ()=>{
        const res = await supertest(app)
        .get('/')

        expect(res.body.message).toBe("hello")
    })
})