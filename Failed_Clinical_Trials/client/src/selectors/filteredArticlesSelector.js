import get from "lodash/get";
import { createSelector } from "reselect";

export const getFilteredArticles = state => get(state, "articles.filteredArticles", []);

export const filteredArticlesSelector = createSelector(getFilteredArticles, articles => articles);

