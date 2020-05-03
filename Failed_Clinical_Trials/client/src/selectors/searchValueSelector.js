import get from "lodash/get";
import { createSelector } from "reselect";

export const getSearchValue = state =>
  get(state, "articles.searchValue", '');

export const searchValueSelector = createSelector(
    getSearchValue,
    searchValue => searchValue
);
