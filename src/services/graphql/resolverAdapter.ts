import {
  UserInputError,
  AuthenticationError,
  ForbiddenError,
  ApolloError,
} from 'apollo-server-express';
import { IController } from '../../interfaces/controller';

export const adaptResolver = async (
  controller: IController,
  args?: any,
  context?: any,
): Promise<any> => {
  const request = {
    ...(args || {}),
  };
  const httpResponse = await controller.handle(request);
  switch (httpResponse.statusCode) {
    case 200:
    case 204:
      return httpResponse.data;
    case 400:
      throw new UserInputError(httpResponse.data.message);
    case 401:
      throw new AuthenticationError(httpResponse.data.message);
    case 403:
      throw new ForbiddenError(httpResponse.data.message);
    default:
      throw new ApolloError(httpResponse.data.message);
  }
};
