"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptResolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const adaptResolver = async (controller, args, context) => {
    const request = {
        ...(args || {}),
    };
    const httpResponse = await controller.handle(request);
    switch (httpResponse.statusCode) {
        case 200:
        case 204:
            return httpResponse.data;
        case 400:
            throw new apollo_server_express_1.UserInputError(httpResponse.data.message);
        case 401:
            throw new apollo_server_express_1.AuthenticationError(httpResponse.data.message);
        case 403:
            throw new apollo_server_express_1.ForbiddenError(httpResponse.data.message);
        default:
            throw new apollo_server_express_1.ApolloError(httpResponse.data.message);
    }
};
exports.adaptResolver = adaptResolver;
