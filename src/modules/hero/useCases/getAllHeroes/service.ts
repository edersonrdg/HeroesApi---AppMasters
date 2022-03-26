export class GetAllHeroesService {
  async exec(): Promise<any> {
    const herosdata = { id: 2, name: 'test' };
    return herosdata;
  }
}
