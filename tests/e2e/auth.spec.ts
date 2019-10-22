import axios, { AxiosInstance } from "axios";

describe('API tests', () =>{
    
    let instance:  AxiosInstance= axios.create({
        baseURL: 'http://localhost:3000/api/v1/',
        timeout: 1000,       
      }); 
    require('../../src/server'); 

    it('returns health ok',async (done) => { 
         instance.get('health')
        .then(function(response){
            expect(response.status).toBe(200);
            return done();
        })
    });

    it('returns echo with message ok',async (done) => {        
        instance.get('echo/message')
        .then(function(response){
            expect(response.status).toBe(200);
            return done();
        })
    }); 
})
