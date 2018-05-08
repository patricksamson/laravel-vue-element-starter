<template>
    <el-form-item :label="label" label-position="right">
        <el-date-picker
            :name="name"
            :label="label"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            v-model="fieldValue"
            @change="emitFieldValueChangeEvent">
        </el-date-picker>
    </el-form-item>
</template>

<script>
    import { FormItem, DatePicker } from 'element-ui';

    export default {
        name: 'date-component',
        components: {
            'el-form-item': FormItem,
            'el-date-picker': DatePicker
        },
        model: {
            prop: 'fieldValue',
            event: 'change'
        },
        props: {
            name: String,
            label: String,
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
