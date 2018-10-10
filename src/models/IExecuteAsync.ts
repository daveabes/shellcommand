export default interface IExecuteAsync {
  executeAsync(payload: string): Promise<string>;
}
