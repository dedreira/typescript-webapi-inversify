import { Container } from 'inversify';
import { IEchoService, EchoService } from '../domain/services/echo';
import { IEchoRepository, EchoRepository } from '../domain/infrastructure/repositories/echo';
import { TYPE, interfaces } from 'inversify-express-utils';
import { EchoController, HealthController } from '../api/controllers/'
import { LoggerMiddleware } from '../api/middlewares/logger-middleware';
const DIContainer = new Container();

DIContainer.bind<LoggerMiddleware>(LoggerMiddleware.name).to(LoggerMiddleware);
DIContainer.bind<IEchoService>(EchoService.name).to(EchoService);
DIContainer.bind<IEchoRepository>(EchoRepository.name).to(EchoRepository);

export default DIContainer;
