export interface IEchoRepository {
    get(message: string): Promise<string>;
}
