import { createStore } from "vuex";

export default createStore({
    state: {
        userName: 'Salman Raza',
        restaurants: [],
    },
    mutations: {
        setUserName(state, payload) { state.userName  = payload; }
    },
})