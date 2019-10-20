import { IEchoRepository } from '../../../../../src/domain/infrastructure/repositories/echo';
require('reflect-metadata');
export class EchoRepositoryMock implements IEchoRepository {
    public async get(message: string): Promise<string> {
        return 'repository-mock';
    }
}
