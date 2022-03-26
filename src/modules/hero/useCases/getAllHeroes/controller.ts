import { ok } from '../../../../helpers/http';
import { IUseCase, IController, IHttpResponse } from '../../../../interfaces';

export class GetAllHeroesController implements IController {
  constructor(private readonly getHeroes: IUseCase) {}

  async handle(): Promise<IHttpResponse> {
    const data = await this.getHeroes.exec();
    return ok(data);
  }
}
