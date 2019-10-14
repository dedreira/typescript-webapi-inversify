
import { EchoRepository } from '../../../../src/domain/infrastructure/repositories/echo/echo-repository';
import 'reflect-metadata';
describe('Echo Repository tests', () => {
    it('Should return same string from method Get', async () => {
        const repository = new EchoRepository();
        const message = 'test';
        const result = await repository.get(message);
        expect(result).toBe(message);
    });
});
