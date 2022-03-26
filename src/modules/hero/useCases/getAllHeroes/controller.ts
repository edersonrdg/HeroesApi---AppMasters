import { ok } from '../../../../helpers/http';
import { IUseCase, IController, IHttpResponse } from '../../../../interfaces';
import { Hero } from '../../interface';
import { InputQuery } from './interface';

export class GetAllHeroesController implements IController {
  constructor(private readonly getHeroes: IUseCase<InputQuery, Hero[]>) {}

  async handle(request: InputQuery): Promise<IHttpResponse> {
    const data = await this.getHeroes.exec(request);
    return ok(data);
  }
}
