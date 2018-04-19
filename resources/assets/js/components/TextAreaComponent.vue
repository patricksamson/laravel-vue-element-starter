<template>
    <el-form-item :label="label" label-position="right">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            :name="name"
            :label="label"
            :placeholder="placeholder"
            v-model="fieldValue"
            @change.native="emitFieldValueChangeEvent">
        </el-input>
    </el-form-item>
</template>

<script>
    import { FormItem, Input } from 'element-ui';

    export default {
        name: 'textarea-component',
        components: {
            'el-form-item': FormItem,
            'el-input': Input
        },
        model: {
            prop: 'fieldValue',
            event: 'change'
        },
        props: {
            name: String,
            label: String,
            placeholder: String,
            fieldValue: [String, Number]
        },
        mounted() {
            //console.log('Input mounted.')
            //setInterval(() => { console.log('fieldValue', this.name, this.fieldValue); }, 3000);
        },
        methods: {
            emitFieldValueChangeEvent() {
                this.$emit('update:fieldValue', this.fieldValue);
            },
        }
    }
</script>
