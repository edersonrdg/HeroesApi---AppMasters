"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHeroUseCase = void 0;
class CreateHeroUseCase {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }
    async exec(addHeroData) {
        const herosdata = await this.heroRepository.addHero(addHeroData);
        return herosdata;
    }
}
exports.CreateHeroUseCase = CreateHeroUseCase;
