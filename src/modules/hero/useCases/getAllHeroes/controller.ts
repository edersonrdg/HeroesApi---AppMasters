import { ok } from '../../../../helpers/http';
import { IUseCase, IController, IHttpResponse } from '../../../../interfaces';
import { Hero } from '../../interface';

export class GetAllHeroesController implements IController {
  constructor(private readonly getHeroes: IUseCase<null, Hero[]>) {}

  async handle(): Promise<IHttpResponse> {
    const data = await this.getHeroes.exec();
    return ok(data);
  }
}
