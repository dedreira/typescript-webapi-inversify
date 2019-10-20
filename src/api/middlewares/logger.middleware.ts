import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from 'inversify';
import * as express from 'express';
@injectable()
export class LoggerMiddleware extends BaseMiddleware {
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        console.log('hit loggermiddleware');                
    }
}