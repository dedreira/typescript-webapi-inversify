import { IEchoService } from '../../../../../src/domain/services/echo';
require('reflect-metadata');
export class EchoServiceMock implements IEchoService {
    public async get(message: string): Promise<string> {
        return 'mock';
    }
};
