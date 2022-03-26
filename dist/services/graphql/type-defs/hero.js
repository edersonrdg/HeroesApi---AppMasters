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
exports.Hero = void 0;
const type_graphql_1 = require("type-graphql");
let HeroPowerstats = class HeroPowerstats {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "intelligence", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "strength", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "speed", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "durability", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "power", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], HeroPowerstats.prototype, "combat", void 0);
HeroPowerstats = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroPowerstats);
let HeroAppearance = class HeroAppearance {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroAppearance.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroAppearance.prototype, "race", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroAppearance.prototype, "eyeColor", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroAppearance.prototype, "hairColor", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], HeroAppearance.prototype, "height", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], HeroAppearance.prototype, "weight", void 0);
HeroAppearance = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroAppearance);
let HeroBiography = class HeroBiography {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "fullName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "alterEgos", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], HeroBiography.prototype, "aliases", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "placeOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "firstAppearance", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "publisher", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroBiography.prototype, "alignment", void 0);
HeroBiography = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroBiography);
let HeroWork = class HeroWork {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroWork.prototype, "occupation", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroWork.prototype, "base", void 0);
HeroWork = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroWork);
let HeroConnections = class HeroConnections {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroConnections.prototype, "groupAffiliation", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroConnections.prototype, "relatives", void 0);
HeroConnections = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroConnections);
let HeroImages = class HeroImages {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroImages.prototype, "xs", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroImages.prototype, "sm", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroImages.prototype, "md", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], HeroImages.prototype, "lg", void 0);
HeroImages = __decorate([
    (0, type_graphql_1.ObjectType)()
], HeroImages);
let Hero = class Hero {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", Number)
], Hero.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], Hero.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Hero.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroPowerstats)
], Hero.prototype, "powerstats", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroAppearance)
], Hero.prototype, "appearance", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroBiography)
], Hero.prototype, "biography", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroWork)
], Hero.prototype, "work", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroConnections)
], Hero.prototype, "connections", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", HeroImages)
], Hero.prototype, "images", void 0);
Hero = __decorate([
    (0, type_graphql_1.ObjectType)()
], Hero);
exports.Hero = Hero;
