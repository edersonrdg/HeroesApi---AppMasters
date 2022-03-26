"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroRepositoryMemory = void 0;
class HeroRepositoryMemory {
    constructor() {
        this.heros = [];
    }
    async getAll() {
        return Promise.resolve(this.heros);
    }
    async addHero(heroData) {
        const lastHeroId = this.heros[this.heros.length - 1].id;
        const heroDataToSave = { ...heroData, ...{ id: lastHeroId + 1 } };
        this.heros.push(heroDataToSave);
        return heroDataToSave;
    }
}
exports.HeroRepositoryMemory = HeroRepositoryMemory;
