import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'
import { testing, testing2 } from '../src/controllers/test.controller'

describe('TEST', ()=>{
    it('SHOULD RETURN TRUE', ()=>{
        expect(testing()).to.equal(true)
    })
    it('SHOULD RETURN 2ND TRUE', ()=>{
        expect(testing2()).to.equal(true)
    })
})