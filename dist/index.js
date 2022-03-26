"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("./services/apollo-server-express");
const seed_1 = require("./services/db/seed");
const app_1 = __importDefault(require("./services/express/app"));
const graphql_1 = require("./services/graphql");
const PORT = 8080;
const main = async () => {
    const schema = await (0, graphql_1.buildGplSchema)();
    const apolloserver = await (0, apollo_server_express_1.startApolloServer)(schema);
    app_1.default.listen(PORT, () => console.log(`server starting on http://localhost:${PORT}${apolloserver.graphqlPath}`));
};
main()
    .then(() => {
    // Executing hero seed
    (0, seed_1.execSeeds)();
})
    .catch(error => {
    console.log(error, 'error');
});