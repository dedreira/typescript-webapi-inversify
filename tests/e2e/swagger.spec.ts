import axios, { AxiosInstance } from "axios";
import { doesNotReject } from "assert";

describe('Swagger tests', () =>{

    let instance:  AxiosInstance= axios.create({
        baseURL: 'http://localhost:3000/api-docs/',
        timeout: 1000,       
      }); 
    require('../../src/server'); 
    

    it('returns 200 when getting swagger UI page', async(done) =>{
        instance.get('/swagger').then(function(response){
            expect(response.status).toBe(200);
            done();
        });
    })

    it('receives swagger.json properly', async(done) =>{
        instance.get('/swagger.json').then(function(response){
            expect(response.status).toBe(200);
            expect(response.data).not.toEqual('');
            done();
        })
    })
})