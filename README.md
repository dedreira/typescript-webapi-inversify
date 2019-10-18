# typescript-webapi-inversify

## Description:
Initial nodejs web api starter project writen in typescript.

Uses inversify-express for controllers and dependency injection.

Also generates a swagger document with the available routes.

Uses Jasmine as test runner and Istanbul (nyc) as code coverage tool

## Prerequisites
Run 'npm install' when download to install all dependencies.

## Swagger documentation
The documentation is generated at runtime.

### UI page url
http://localhost:3000/api-docs/swagger/

### JSON document url
http://localhost:3000/api-docs/swagger.json

## OpenAPI specification
This API is documented using the OpenAPI standard https://swagger.io/docs/specification/about/, available through the nodejs libraries swagger-express-ts and swagger-ui-dist.

## Tests
This API has been built using jasmine as test runner: https://jasmine.github.io/. 

running the command "npm run test" should run jasmine, showing the output through the console.


## Code Coverage tool
This API uses Istanbul code coverage tool (nyc) : https://github.com/istanbuljs/nyc

running the command "npm run test-coverage" should run jasmine and execute istanbul showing the output through the console and generating a coverage report available at "/src/coverage/cobertura-coverage.xml

