export interface IEchoService {
    get(message: string): Promise<string>;
}
