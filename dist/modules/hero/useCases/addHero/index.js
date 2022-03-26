"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddHeroController = void 0;
const locale_1 = require("../../../../config/locale");
const controller_1 = require("./controller");
const useCase_1 = require("./useCase");
const makeAddHeroController = () => {
    const heroRepository = locale_1.locale.heroRepository;
    const useCase = new useCase_1.CreateHeroUseCase(heroRepository);
    const creeateHeroController = new controller_1.CreateHeroController(useCase);
    return creeateHeroController;
};
exports.makeAddHeroController = makeAddHeroController;
