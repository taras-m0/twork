/**
 * Created by ttt on 26.10.2017.
 */
import store, { Vue, Vuex } from './store';

import AppForm from './AppForm.vue';
import AppComment from './AppComent.vue';
import './style/index.less';
import "./style/fonts.less";
import "./style/social_icon.less";

const app = new Vue({
    el: '#form-app',
    render: (h) => h(AppForm)
});

const app_coments = new Vue({
    el: '#comment-app',
    render: (h) => h(AppComment)
});