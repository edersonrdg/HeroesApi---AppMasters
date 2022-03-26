"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGplSchema = void 0;
const type_graphql_1 = require("type-graphql");
const hero_1 = require("./resolvers/hero");
const buildGplSchema = async () => {
    return await (0, type_graphql_1.buildSchema)({
        resolvers: [hero_1.HeroResolver],
        emitSchemaFile: true,
        validate: false,
    });
};
exports.buildGplSchema = buildGplSchema;
