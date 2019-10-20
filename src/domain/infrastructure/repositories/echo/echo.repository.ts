import { injectable } from 'inversify';
import 'reflect-metadata';
import { IEchoRepository } from './echo.repository.interface';

@injectable()
export class EchoRepository implements IEchoRepository {
    public async get(message: string): Promise<string> {
        return message;
    }

}
