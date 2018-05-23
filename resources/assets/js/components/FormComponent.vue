<template>
    <div>
        <slot name="title">
            <h1>{{ title }}</h1>
        </slot>

        <el-form
            label-width="120px"
            @submit.native.prevent>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Submit</el-button>
                <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { Form, FormItem, Button } from 'element-ui';

    export default {
        name: 'form-component',
        components: {
            'el-form': Form,
            'el-form-item': FormItem,
            'el-button': Button,
        },
        props: {
            title: String,
            schema: Object,

            errorBag: {
                type: Object,
                default: {},
            }
        },
        mounted() {
            //
        },
        methods: {
            hasError: function (fieldName) {
                return this.errors.hasOwnProperty(fieldName);
            },

            getError: function (fieldName) {
                return this.errors[fieldName][0];
            },

            onSubmit() {
                // TODO
            },

            onCancel() {
                // TODO
            },
        }
    }
</script>
