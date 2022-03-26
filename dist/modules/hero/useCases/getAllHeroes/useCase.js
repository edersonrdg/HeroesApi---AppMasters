"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllHeroesUseCase = void 0;
const paginateArr_1 = require("../../../../helpers/paginateArr");
const heroObjectSort_1 = require("../../helpers/heroObjectSort");
class GetAllHeroesUseCase {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }
    async exec(paginationParams) {
        const herosdata = await this.heroRepository.getAll();
        const sortHeroesArr = (0, heroObjectSort_1.heroObjectSorting)(herosdata, paginationParams);
        const heroesPaginated = (0, paginateArr_1.paginate)(sortHeroesArr, paginationParams);
        return heroesPaginated;
    }
}
exports.GetAllHeroesUseCase = GetAllHeroesUseCase;
