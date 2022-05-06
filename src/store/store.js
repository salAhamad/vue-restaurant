import { createStore } from "vuex";

export default createStore({
    state: {
        userName: null,
        error: false,
        errorMessage: null,
        userNameLocalStorage: 'currentUser',
        restaurants: [],
    },
    mutations: {
        setUserName(state, payload) { state.userName  = payload; },
        formError(state, {err, errMsg}) {
            state.error = err;
            state.errorMessage = errMsg;
        }
    },
})