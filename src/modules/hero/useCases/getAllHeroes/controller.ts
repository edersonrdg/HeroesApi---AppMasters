import { noContent } from '../../../../helpers/http';
import { IController } from '../../../../interfaces/controller';
import { IHttpResponse } from '../../../../interfaces/http-response';

export class GetAllHeroesController implements IController {
  constructor(private readonly getHeroes: IUseCase<>) {}

  async handle(): Promise<IHttpResponse> {
    return noContent();
  }
}
