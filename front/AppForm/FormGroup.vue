<template>
    <div class="form-group" v-bind:class="{ 'has-error': error, 'require': requires }">
        <label v-bind:for="name">{{ label }}</label>
        <input v-if="type == TYPE_TEXT || type == TYPE_EMAIL"
               :type="type" class="form-control"
               :id="name" :name="name" placeholder="" :value="value" @input="change" />
        <textarea v-else-if="type == TYPE_TEXTAREA"
                  class="form-control" :id="name" @input="change" :name="name" :value="value"></textarea>
    </div>
</template>

<script>
    import { TYPE_TEXT, TYPE_EMAIL, TYPE_TEXTAREA } from './FormGroup';
    import '../style/input.less';

    export default {
        props: {
            label: {
                type: String
            }

            ,require: {
                type: Boolean,
                default: false
            }

            ,name: {
                type: String,
                required: true
            }

            ,type: {
                type: String,
                default: TYPE_TEXT
            }

            ,validator: {
                type: RegExp,
                default: /.*/
            }

            ,value: {
                type: String
            }
        }

        ,data(){
            return { TYPE_TEXT, TYPE_EMAIL, TYPE_TEXTAREA, error: false, requires: this.require }
        }

        ,methods: {
            change: function (e) {
                const value = e.target.value;
                this.$emit('input', value);
            }
        }
        ,watch:{
            value: function (value) {
                if(value == ''){
                    this.error = false;
                    this.$emit('valid', false)
                }else if( this.validator.test(value) ){
                    this.error = false;
                    this.$emit('valid', true)
                }else {
                    this.error = true;
                    this.$emit('valid', false)
                }
            }
        }
    }
</script>