import { noContent } from '../../../../helpers/http';
import { IController } from '../../../../interfaces/controller';
import { IHttpResponse } from '../../../../interfaces/http-response';

export class GetAllHeroesController implements IController {
  async handle(): Promise<IHttpResponse> {
    return noContent();
  }
}
