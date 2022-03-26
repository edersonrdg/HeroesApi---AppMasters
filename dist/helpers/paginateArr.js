"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
function paginate(array, params) {
    const { limit = 100, page = 1 } = params;
    return array.slice((page - 1) * limit, page * limit);
}
exports.paginate = paginate;
