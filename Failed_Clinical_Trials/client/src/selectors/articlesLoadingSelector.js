import get from "lodash/get";
import { createSelector } from "reselect";

export const getArticlesLoading = state =>
  get(state, "articles.articlesLoading", false);

export const articlesLoadingSelector = createSelector(
  getArticlesLoading,
  articlesLoading => articlesLoading
);
