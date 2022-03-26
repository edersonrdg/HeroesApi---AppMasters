"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllHeroesController = void 0;
const http_1 = require("../../../../helpers/http");
class GetAllHeroesController {
    constructor(getHeroes) {
        this.getHeroes = getHeroes;
    }
    async handle(request) {
        const data = await this.getHeroes.exec(request);
        return (0, http_1.ok)(data);
    }
}
exports.GetAllHeroesController = GetAllHeroesController;
