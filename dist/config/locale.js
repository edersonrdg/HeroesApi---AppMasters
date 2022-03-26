"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locale = void 0;
const heroRepositoryMemory_1 = require("../services/db/repositories/heroRepositoryMemory");
// Create a unique instance class for all application
exports.locale = {
    heroRepository: new heroRepositoryMemory_1.HeroRepositoryMemory(),
};
