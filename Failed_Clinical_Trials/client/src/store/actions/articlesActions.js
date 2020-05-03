import {GET_ALL_ARTICLES} from "./actionTypes";
import {GET_ALL_ARTICLES_FAILED} from "./actionTypes";
import {GET_ALL_ARTICLES_SUCCESS} from "./actionTypes";
import {SEARCH_VALUE} from "./actionTypes";
import axios from 'axios';

const getArticlesAction = () => {
    return {
        type: GET_ALL_ARTICLES,
    };
};
const getArticlesErrorAction = error => {
    return {
        type: GET_ALL_ARTICLES_FAILED,
        payload: error
    };
};
const getArticlesSuccessAction = articles => {
    return {
        type: GET_ALL_ARTICLES_SUCCESS,
        payload: articles
    };
};
export const searchValueAction = value => {
    return {
        type: SEARCH_VALUE,
        payload: value
    };
};

export const getArticlesAsync = () => {
    return function(dispatch) {
        dispatch(getArticlesAction());
        axios
            .get('/failed-clinical-trials', )
            .then(response => {
                setTimeout(() => {
                    dispatch(
                        getArticlesSuccessAction(response.data.data)
                    );
                }, 1000);
            })
            .catch(error => {
                console.error("Error while getting data: ", error);
                dispatch(getArticlesErrorAction(error));
            });
    };
};

