export interface IController<T = any> {
  handle: (request: T) => Promise<any>;
}
