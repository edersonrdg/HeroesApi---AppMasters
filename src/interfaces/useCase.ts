export interface IUseCase<Input = any, Output = any> {
  exec: (data: Input) => Promise<Output>;
}
