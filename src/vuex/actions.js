import {
    POPULATE_PRODUCT_LIST,
    LOGIN_STATUS,
    SIGNUP_STATUS,
    TOKEN,
    CATEGORIES,
    IS_PRODUCT_POSTED,
    PRODUCTS_BY_USER,
    PRODUCT_IMAGE_URL
} from "./mutation_types";
import api from '../api';
import router from "../router";

export default {
    populateProductList: ({ commit }) => {
        api.fetchProductList()
            .then(response => {
                console.log(response.data);
                commit(POPULATE_PRODUCT_LIST, response.data);
            });
    },
    loginUser: ({ commit }, userData) => {
        api.loginUser(userData)
            .then(res => {
                commit(LOGIN_STATUS, res.status);
                commit(TOKEN, res.body.token);
                router.push("/");
            })
            .catch(() => {
                commit(LOGIN_STATUS, 404);
            });
    },
    logoutUser: ({ commit }) => {
        commit(LOGIN_STATUS, 404);
        router.push("/");
    },
    loggedInUser: ({ commit }, token) => {
        api.fetchLoginUser(token)
            .then(res => {
                commit(LOGIN_STATUS, res.status);
            })
            .catch(() => {
                commit(LOGIN_STATUS, 404);
            });
    },
    signUpUser: ({ commit }, userData) => {
        api.signUp(userData)
            .then(res => {
                commit(SIGNUP_STATUS, res.status);
                commit(TOKEN, res.body.token);
                commit(LOGIN_STATUS, 200)
                router.push("/");
            })
            .catch(res => {
                console.log(res.status);
                commit(SIGNUP_STATUS, res.status);
            });
    },
    fetchCategories: ({ commit }) => {
        api.fetchCategoryList()
            .then(res => {
                commit(CATEGORIES, res.data)
            });
    },
    postProduct: ({ commit }, productData) => {
        api.postProduct(productData)
            .then(() => {
                commit(IS_PRODUCT_POSTED, true);
                router.push("products");
            })
            .catch(() => {
                commit(IS_PRODUCT_POSTED, false);
            });
    },
    fetchProductsByUser: ({ commit }, token) => {
        api.getProductByUser(token)
            .then(res => {
                console.log(res.body);
                commit(PRODUCTS_BY_USER, res.body);
            });
    },
    fetchProductImageURL: ({ commit }, productID) => {
        api.getProductImageURL(productID)
            .then(res => {
                console.log(res.body);
                commit(PRODUCT_IMAGE_URL, res.body.productImageURL);
            });
    }
};