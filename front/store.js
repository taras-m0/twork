/**
 * Created by ttt on 28.10.2017.
 */
import Vue from 'vue/dist/vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export { Vue, Vuex };

const store = new Vuex.Store({
    state: {
        comments: window.commentsData ? window.commentsData : []
    },
    mutations: {
        add: (state, comment) => ( state.comments.push( comment ) )
    }
});

export default store;
