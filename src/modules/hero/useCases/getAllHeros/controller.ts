import { IController } from '../../../../interfaces/controller';

export class GetAllHeroesController implements IController {
  async handle(): Promise<string> {
    return 'get heros controller';
  }
}
