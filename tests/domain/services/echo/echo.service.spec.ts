
import { EchoService } from '../../../../src/domain/services/echo';
import { EchoRepositoryMock } from '../../mocks/repositories/echo/echo.repository.mock';
require('reflect-metadata');

describe('Echo Repository Tests', () => {
    it('Should return message calling to repository layer', async () => {
        const service = new EchoService(new EchoRepositoryMock());
        const result = await service.get('Hi');
        expect(result).toBe('repository-mock');
    });
})