<template>
    <div class="col-lg-10 col-lg-offset-1 col-xs-12 col-xs-offset-0 comment-wrap">
        <div class="col-md-4 col-sm-6" v-for="comment in comments">
            <div class="comment" :data-id="comment.id">
                <h3 class="">{{ comment.name }}</h3>
                <p class="email">{{ comment.email }}</p>
                <p>{{ comment.comment }}</p>
            </div>
        </div>
    </div>

</template>

<script>
    import store from './store';
    import './style/comment.less';

    export default {
        computed: {
            comments: function () {
                return store.state.comments
            }
        }
    }
</script>