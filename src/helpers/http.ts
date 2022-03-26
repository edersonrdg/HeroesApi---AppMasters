import { IHttpResponse } from '../interfaces/http-response';

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  data: data,
});

export const noContent = (): IHttpResponse => ({
  statusCode: 204,
  data: null,
});
