"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execSeeds = void 0;
const saveHeroesDataApi_1 = require("./saveHeroesDataApi");
const execSeeds = async () => {
    await (0, saveHeroesDataApi_1.saveApiHerosSeed)();
};
exports.execSeeds = execSeeds;
