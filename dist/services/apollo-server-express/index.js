"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApolloServer = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const app_1 = __importDefault(require("../express/app"));
const startApolloServer = async (schema) => {
    const server = new apollo_server_express_1.ApolloServer({
        schema,
    });
    await server.start();
    server.applyMiddleware({ app: app_1.default });
    return server;
};
exports.startApolloServer = startApolloServer;
