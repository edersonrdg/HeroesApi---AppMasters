import { ok } from '../../../../helpers/http';
import { IUseCase, IController, IHttpResponse } from '../../../../interfaces';
import { Hero } from '../../interface';
import { IPaginationParams } from './interface';

export class GetAllHeroesController implements IController {
  constructor(
    private readonly getHeroes: IUseCase<IPaginationParams, Hero[]>,
  ) {}

  async handle(request: IPaginationParams): Promise<IHttpResponse> {
    const data = await this.getHeroes.exec(request);
    return ok(data);
  }
}
