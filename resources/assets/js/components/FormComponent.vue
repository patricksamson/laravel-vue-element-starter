<template>
    <div>
        <slot name="title">
            <h1>{{ title }}</h1>
        </slot>

        <el-form
            label-width="120px"
            @submit.native.prevent>

            <div
                v-for="field in schema.fields"
                v-bind:item="field"
                v-bind:key="field.name">

                <input-component
                    v-if="field.type === 'input'"
                    v-bind:name="field.name"
                    v-bind:label="field.label"
                    v-bind:errorMessage="getError(field.name)">
                </input-component>

                <textarea-component
                    v-else-if="field.type == 'text'"
                    v-bind:name="field.name"
                    v-bind:label="field.label"
                    v-bind:errorMessage="getError(field.name)">
                </textarea-component>

                <date-component
                    v-else-if="field.type === 'date'"
                    v-bind:name="field.name"
                    v-bind:label="field.label"
                    v-bind:errorMessage="getError(field.name)">
                </date-component>

                <select-component
                    v-else-if="field.type === 'select'"
                    v-bind:name="field.name"
                    v-bind:label="field.label"
                    :options="[{value: 'Option1', label: 'Option1'}, {value: 'Option2', label: 'Option2'}]"
                    v-bind:errorMessage="getError(field.name)">
                </select-component>

                <switch-component
                    v-else-if="field.type === 'switch'"
                    v-bind:name="field.name"
                    v-bind:label="field.label"
                    active-text="On"
                    inactive-text="Off"
                    v-bind:errorMessage="getError(field.name)">
                </switch-component>

            </div>

            {{ errorBag.size }}

            {{ errorBag }}

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Submit</el-button>
                <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { Form, FormItem, Button } from 'element-ui';
    import FormErrorBag from './FormErrorBag.js';

    export default {
        name: 'form-component',
        components: {
            'el-form': Form,
            'el-form-item': FormItem,
            'el-button': Button,
        },
        props: {
            title: String,
            schema: {
                type: Object,
                default: function() {
                    return {
                        fields: [
                            {
                                name: 'testinput',
                                label: 'Test Input',
                                type: 'input',
                            },
                            {
                                name: 'testdate',
                                label: 'Test Date',
                                type: 'date',
                            },
                        ],

                        submitUrl: '/',
                    };
                }
            },

            errorBag: {
                type: Object,
                default: function() {
                    return new FormErrorBag();
                },
            }
        },
        mounted() {
            //
        },
        methods: {
            hasError: function (fieldName) {
                return this.errorBag.has(fieldName);
            },

            getError: function (fieldName) {
                return this.errorBag.get(fieldName);
            },

            onSubmit() {
                self = this;
                axios.post(self.schema.submitUrl, {
                    // TODO : insert post data here
                    field: 'value'
                }).then(function (response) {
                    self.errorBag.clear();
                    console.log('Form submitted successfully!')

                    // TODO : do something
                    //return window.location.href = '{{ isset($client->id) ? route('admin.client-show', ['clientId' => $client->id]) : route('admin.clients-list') }}';
                }).catch(function (error) {
                    let errors = error.response.data.errors;

                    self.errorBag.clear();
                    self.errorBag.fill(errors);
                    /*for (let [key, value] of Object.entries(errors)) {
                        self.errorBag.set(key, errors[key][0]);
                    }*/

                    console.log(self.errorBag);
                });
            },

            onCancel() {
                // TODO
                window.history.back();
            },
        }
    }
</script>
