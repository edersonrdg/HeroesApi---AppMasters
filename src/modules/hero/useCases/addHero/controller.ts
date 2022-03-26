import { ok } from '../../../../helpers/http';
import { IUseCase, IController, IHttpResponse } from '../../../../interfaces';
import { Hero } from '../../interface';
import { AddHeroInput } from './interface';

export class CreateHeroController implements IController {
  constructor(private readonly getHeroes: IUseCase<AddHeroInput, Hero>) {}

  async handle(request: AddHeroInput): Promise<IHttpResponse> {
    const data = await this.getHeroes.exec(request);
    return ok(data);
  }
}
