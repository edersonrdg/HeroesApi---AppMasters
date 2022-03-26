"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveApiHerosSeed = void 0;
const locale_1 = require("../../../config/locale");
const getheroesApiData_1 = require("../../axios/getheroesApiData");
const saveApiHerosSeed = async () => {
    const heroes = await (0, getheroesApiData_1.getHeroesApi)();
    heroes.forEach(hero => {
        locale_1.locale.heroRepository.heros.push(hero);
    });
    console.log('Seed hero finish');
};
exports.saveApiHerosSeed = saveApiHerosSeed;
