import { inject } from 'inversify';
import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, httpMethod, BaseHttpController } from 'inversify-express-utils';
import 'reflect-metadata';
import { ApiPath, ApiOperationGet, SwaggerDefinitionConstant } from 'swagger-express-ts';
@ApiPath({
    path: '/health',
    name: 'health',
    security: { bearerAuth:[]}
})

@controller("/api/v1/health")
export class HealthController extends BaseHttpController {
    @ApiOperationGet(
        {
            description: 'Get health',
            summary: 'Checks if API is up',
            path: '/' ,       
            responses:{
                200: {description:'Success', type: SwaggerDefinitionConstant.Response.Type.STRING}                
            }
        }
    )
    @httpGet("/")
    public async get(@request() req: express.Request, @response() res: express.Response): Promise<void> {
        res.status(200).json({message:'Ok'});
    }
}