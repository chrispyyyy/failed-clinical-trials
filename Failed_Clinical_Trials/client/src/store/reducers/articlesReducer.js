import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articlesLoading: false
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
        default:
            return state;
    }
};

export default reducer;
