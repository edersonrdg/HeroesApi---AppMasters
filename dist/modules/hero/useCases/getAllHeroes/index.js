"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllHeroesController = void 0;
const locale_1 = require("../../../../config/locale");
const controller_1 = require("./controller");
const useCase_1 = require("./useCase");
const makeGetAllHeroesController = () => {
    const heroRepository = locale_1.locale.heroRepository;
    const useCase = new useCase_1.GetAllHeroesUseCase(heroRepository);
    const herosController = new controller_1.GetAllHeroesController(useCase);
    return herosController;
};
exports.makeGetAllHeroesController = makeGetAllHeroesController;
