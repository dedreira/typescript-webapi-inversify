import { IEchoService } from 'src/domain/services/echo';
import { inject } from 'inversify';
import { controller, httpGet, requestParam } from 'inversify-express-utils';
import 'reflect-metadata';
import { ApiPath, ApiOperationGet, SwaggerDefinitionConstant } from 'swagger-express-ts';

@ApiPath({
    path: '/api/v1/echo',
    name: 'echo',
    security: { bearerAuth:[]}
})

@controller("/api/v1/echo")
export class EchoController{
    private service: IEchoService;

    constructor(@inject('EchoService') service: IEchoService) {
        this.service = service;
    }
    @ApiOperationGet(
        {
            description: 'Get echo message back',
            summary: 'Get echo message',
            path: '/{message}',            
            parameters:{
                path: {
                    message: {
                        required: true,
                        type:  SwaggerDefinitionConstant.Parameter.Type.STRING
                    }
                }
            },
            responses:{
                200: {description:'Success', type: SwaggerDefinitionConstant.Response.Type.STRING}                
            }
        }
    )
    @httpGet("/:message")
    public async get(        
        @requestParam("message") message: string){
            return await this.service.get(message);      
    };
}