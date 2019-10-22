# typescript-webapi-inversify

## Description:
Initial nodejs web api starter project written in typescript.

## Prerequisites
NodeJS version >= 10.15.x
Run 'npm install' before run to install all dependencies.


## Dependency Injection tool
Uses inversify-express for controllers and dependency injection: https://github.com/inversify/inversify-express-utils


## OpenAPI specification
This API is documented using the OpenAPI standard https://swagger.io/docs/specification/about/, available through the nodejs libraries swagger-express-ts and swagger-ui-dist.

### Swagger generation tool
Uses swagger-express-ts as open api doc generation tool: https://github.com/olivierlsc/swagger-express-ts
and swagger-ui-dist to serve swagger.json and show the ui page: https://www.npmjs.com/package/swagger-ui-dist

#### UI page url
http://localhost:3000/api-docs/swagger/

#### JSON document url
http://localhost:3000/api-docs/swagger.json


## Tests
This API has been built using jasmine as test runner: https://jasmine.github.io/. 

running the command "npm run test" should run jasmine, showing the output through the console.


## Code Coverage tool
This API uses Istanbul code coverage tool (nyc) : https://github.com/istanbuljs/nyc

running the command "npm run test-coverage" should run jasmine and execute istanbul showing the output through the console and generating a coverage report available at "/src/coverage/cobertura-coverage.xml

