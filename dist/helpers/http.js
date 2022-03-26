"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.ok = void 0;
const ok = (data) => ({
    statusCode: 200,
    data: data,
});
exports.ok = ok;
const noContent = () => ({
    statusCode: 204,
    data: null,
});
exports.noContent = noContent;
