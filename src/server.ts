import express = require('express');
import * as bodyParser from 'body-parser';
import cors = require('cors');
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";
import { InversifyExpressServer } from 'inversify-express-utils';
import DIContainer from './dependency-injection/di-container';
import './api/controllers'


// start the server
let server = new InversifyExpressServer(DIContainer);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());             
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
        next();
    });    
    app.use(cors());
    app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
    app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(swagger.express(
        {
            definition : {
                info : {
                    title : "Web API NodeJS Starter Template" ,
                    version : "1.0"
                } ,
                externalDocs : {
                    url : "My url"
                }
                // Models can be defined here
            }
        }
    ) );
  });
  
  let serverInstance = server.build();
  serverInstance.listen(3000);
  
  console.log('Server started on port 3000 :)');