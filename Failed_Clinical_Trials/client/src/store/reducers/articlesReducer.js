import * as actionTypes from "../actions/actionTypes";

const initialState = {
  articlesLoading: false,
  searchValue: "",
  allArticles: [],
  filteredArticles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ARTICLES_SUCCESS:
      return {
        allArticles: [...action.payload],
        articlesLoading: false
      };
    case actionTypes.GET_ALL_ARTICLES:
      return {
        articlesLoading: true
      };
    case actionTypes.SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
        filteredArticles: state.allArticles.filter(
            article => article.medicinalProduct.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
};

export default reducer;
