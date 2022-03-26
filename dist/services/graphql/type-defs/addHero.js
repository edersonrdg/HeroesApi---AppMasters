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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHero = void 0;
const type_graphql_1 = require("type-graphql");
let AddHeroPowerstats = class AddHeroPowerstats {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "intelligence", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "strength", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "speed", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "durability", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "power", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], AddHeroPowerstats.prototype, "combat", void 0);
AddHeroPowerstats = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroPowerstats);
let AddHeroAppearance = class AddHeroAppearance {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroAppearance.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroAppearance.prototype, "race", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroAppearance.prototype, "eyeColor", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroAppearance.prototype, "hairColor", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], AddHeroAppearance.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], AddHeroAppearance.prototype, "weight", void 0);
AddHeroAppearance = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroAppearance);
let AddHeroBiography = class AddHeroBiography {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "fullName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "alterEgos", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], AddHeroBiography.prototype, "aliases", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "placeOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "firstAppearance", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "publisher", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroBiography.prototype, "alignment", void 0);
AddHeroBiography = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroBiography);
let AddHeroWork = class AddHeroWork {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroWork.prototype, "occupation", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroWork.prototype, "base", void 0);
AddHeroWork = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroWork);
let AddHeroConnections = class AddHeroConnections {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroConnections.prototype, "groupAffiliation", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroConnections.prototype, "relatives", void 0);
AddHeroConnections = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroConnections);
let AddHeroImages = class AddHeroImages {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroImages.prototype, "xs", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroImages.prototype, "sm", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroImages.prototype, "md", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHeroImages.prototype, "lg", void 0);
AddHeroImages = __decorate([
    (0, type_graphql_1.InputType)()
], AddHeroImages);
let AddHero = class AddHero {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], AddHero.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AddHero.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroPowerstats)
], AddHero.prototype, "powerstats", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroAppearance)
], AddHero.prototype, "appearance", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroBiography)
], AddHero.prototype, "biography", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroWork)
], AddHero.prototype, "work", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroConnections)
], AddHero.prototype, "connections", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", AddHeroImages)
], AddHero.prototype, "images", void 0);
AddHero = __decorate([
    (0, type_graphql_1.InputType)()
], AddHero);
exports.AddHero = AddHero;
