<template>
    <div class="row">
        <div class="col-md-5 col-xs-offset-1 col-xs-10">
            <FormGroup label="Имя" :type="TYPE_TEXT" :require="true"
                       name="name" :validator="/..+/" v-model="name" @valid="validateName" />

            <FormGroup label="E-Mail" :type="TYPE_EMAIL" :require="true"
                       name="email" :validator="/.+\@.+\..+/" v-model="email" @valid="validateEmail" />
        </div>

        <div class="col-md-5 col-xs-10 col-xs-offset-1 col-md-offset-0">
            <FormGroup label="Комментарий" :type="TYPE_TEXTAREA" :require="true"
                       name="comment" :validator="/...+/" v-model="comment" @valid="validateComment" />
        </div>

        <div class="col-xs-10 col-xs-offset-1">
            <button type="submit" class="btn btn-danger pull-right" :disabled="disabled" @click.prevent="send">Записать</button>
        </div>
    </div>
</template>

<script>
    import FormGroup, { TYPE_TEXT, TYPE_EMAIL, TYPE_TEXTAREA } from './AppForm/FormGroup';
    import store from './store';
    import api from './api';
    import './style/AppForm.less';

    export default {
        components: { FormGroup },
        data(){
            return { TYPE_TEXT, TYPE_EMAIL, TYPE_TEXTAREA,
                name: '', email: '', comment: '',
                validName: false, validEmail: false, validComment: false
                ,sended: false
            }
        },
        methods:{
            send(e){
                this.sended = true;

                api.add({
                    name: this.name,
                    email: this.email,
                    comment: this.comment
                }).then((response) => {
                    if(response.id){
                        store.commit('add', {
                            id: response.id,
                            name: this.name,
                            email: this.email,
                            comment: this.comment
                        });
                        this.name = '';
                        this.email = '';
                        this.comment = '';
                    }

                    this.sended = false;
                }).catch((error) => {
                    this.sended = false;
                });
            }

            ,validateName(valid){
                this.validName = valid;
            }
            ,validateEmail(valid){
                this.validEmail = valid;
            }
            ,validateComment(valid){
                this.validComment = valid;
            }
        },
        computed: {
            disabled: function () {
                return !(this.validName && this.validEmail && this.validComment && !this.sended);
            }
        }
    };
</script>
