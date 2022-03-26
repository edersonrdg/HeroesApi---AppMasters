"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesApi = void 0;
const axios_1 = __importDefault(require("axios"));
const getHeroesApi = async () => {
    const heroData = await axios_1.default.get('https://akabab.github.io/superhero-api/api/all.json');
    return heroData.data;
};
exports.getHeroesApi = getHeroesApi;
