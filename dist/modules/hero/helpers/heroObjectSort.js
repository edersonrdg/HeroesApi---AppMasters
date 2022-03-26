"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroObjectSorting = void 0;
const formatHeroObjectToSortOrSearch_1 = require("./formatHeroObjectToSortOrSearch");
function heroObjectSorting(data, params) {
    const { order, query, filter } = params;
    const heroArrFormatToSort = (0, formatHeroObjectToSortOrSearch_1.formatHeroDataToSortOrSearch)(data);
    const sortedHeroData = heroArrFormatToSort.sort((a, b) => {
        if (a[`${order}`] < b[`${order}`]) {
            return -1;
        }
        if (a[`${order}`] > b[`${order}`]) {
            return 1;
        }
        return 0;
    });
    const filteredHeroData = query
        ? sortedHeroData.filter(heroData => filter
            ? heroData[`${filter}`] === query
            : Object.values(heroData).find(value => value === query))
        : sortedHeroData;
    return (0, formatHeroObjectToSortOrSearch_1.formatHeroToReturn)(filteredHeroData);
}
exports.heroObjectSorting = heroObjectSorting;
