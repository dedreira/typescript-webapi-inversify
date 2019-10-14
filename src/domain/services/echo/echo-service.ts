
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { IEchoRepository } from '../../infrastructure/repositories/echo/echo-repository-interface';
import { IEchoService } from './echo-service-interface';

@injectable()
export class EchoService implements IEchoService {
    private repository: IEchoRepository;

    constructor(@inject('EchoRepository') repository: IEchoRepository) {
        this.repository = repository;
    }

    public async get(message: string): Promise<string> {
        return await this.repository.get(message);
    }

}
