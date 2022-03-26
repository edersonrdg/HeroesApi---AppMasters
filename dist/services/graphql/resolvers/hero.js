"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroResolver = void 0;
const type_graphql_1 = require("type-graphql");
const addHero_1 = require("../../../modules/hero/useCases/addHero");
const getAllHeroes_1 = require("../../../modules/hero/useCases/getAllHeroes");
const resolverAdapter_1 = require("../resolverAdapter");
const addHero_2 = require("../type-defs/addHero");
const hero_1 = require("../type-defs/hero");
let HeroResolver = class HeroResolver {
    async listHeroes(limit, order, page) {
        return (0, resolverAdapter_1.adaptResolver)((0, getAllHeroes_1.makeGetAllHeroesController)(), { limit, order, page });
    }
    async searchHeroes(filter, query) {
        return (0, resolverAdapter_1.adaptResolver)((0, getAllHeroes_1.makeGetAllHeroesController)(), { filter, query });
    }
    async createHero(heroInputData) {
        return (0, resolverAdapter_1.adaptResolver)((0, addHero_1.makeAddHeroController)(), heroInputData);
    }
};
__decorate([
    (0, type_graphql_1.Query)(_returns => [hero_1.Hero], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('limit', { defaultValue: 100, nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('order', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('page', { defaultValue: 1, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "listHeroes", null);
__decorate([
    (0, type_graphql_1.Query)(_returns => [hero_1.Hero], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('filter', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('query', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "searchHeroes", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => hero_1.Hero),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addHero_2.AddHero]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "createHero", null);
HeroResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], HeroResolver);
exports.HeroResolver = HeroResolver;
