import {API_URL} from "../consts/consts";

export const ACTION_TYPES = {
    PRODUCTS_FETCH: "PRODUCTS_FETCH",
    PRODUCTS_FETCH_SUCCESS : "PRODUCTS_FETCH_SUCCESS",
    PRODUCTS_FETCH_ERROR: "PRODUCTS_FETCH_ERROR"
};

export const fetchProducts = () => ({
    type: ACTION_TYPES.PRODUCTS_FETCH
});

export const fetchProductsSuccess = products => ({
    type: ACTION_TYPES.PRODUCTS_FETCH_SUCCESS,
    products
});

export const fetchUserError = () => ({
    type: ACTION_TYPES.PRODUCTS_FETCH_ERROR
});

export const getProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchProducts());
            const response = await fetch(API_URL);
            const products = await response.json();

            dispatch(fetchProductsSuccess(products));
        } catch (e) {
            dispatch(fetchUserError());
        }
    };
};