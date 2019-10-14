# typescript-webapi-inversify

## Description:
Initial nodejs web api starter project writen in typescript.

Uses inversify-express for controllers and dependency injection.

Also generates a swagger document with the available routes.

Uses Jasmine as test runner.

## Prerequisites
Run 'npm install' when download to install all dependencies.

## Commands

### Launch project with ts-node
npm run dev

### Run tests*
npm run test

#### Note: Error running tests:
There's an error running the echo-controller tests with jasmine and inversify-express -> https://github.com/jasmine/jasmine/issues/1757

### Transpile typescript and run the result
npm run serve

## Swagger documentation
The documentation is generated at runtime.
### UI page url
http://localhost:3000/api-docs/swagger/
### JSON document url
http://localhost:3000/api-docs/swagger.json

