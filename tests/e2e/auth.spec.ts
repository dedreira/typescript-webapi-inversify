var request = require("request");
var express = require("express");

require('reflect-metadata');

describe('API Auth tests', () =>{
    beforeEach(()=>{
        require('../../src/server');
    })

    it('returns health ok',async (done) => {
        request("http://localhost:3000/api/v1/health", function(error:Error, response:any, json:string){
            expect(response.statusCode).toBe(200);
            done();
        });
    })
})
