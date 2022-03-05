import { expect, request, use } from 'chai'
import chaiHttp from 'chai-http'
import { testing, testing2, testing3, testing4, testing5, testing6 } from '../src/controllers/test.controller'

describe('TEST', ()=>{
    it('SHOULD RETURN TRUE', ()=>{
        expect(testing()).to.equal(true)
    })
    it('SHOULD RETURN 2 TRUE', ()=>{
        expect(testing2()).to.equal(true)
    })
    it('SHOULD RETURN 3 TRUE', ()=>{
        expect(testing3()).to.equal(true)
    })
    it('SHOULD RETURN 4 TRUE', ()=>{
        expect(testing4()).to.equal(true)
    })
    it('SHOULD RETURN 5 TRUE', ()=>{
        expect(testing5()).to.equal(true)
    })
    it('SHOULD RETURN 6 TRUE', ()=>{
        expect(testing6()).to.equal(true)
    })
})