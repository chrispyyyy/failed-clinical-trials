import get from "lodash/get";
import { createSelector } from "reselect";

export const getArticles = state => get(state, "articles.allArticles", []);

export const articlesSelector = createSelector(getArticles, articles => articles);

