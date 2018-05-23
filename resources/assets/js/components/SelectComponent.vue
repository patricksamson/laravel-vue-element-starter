<template>
    <el-form-item
        :label="label"
        label-position="right"
        :required="required">
        <el-select
            :name="name"
            :placeholder="placeholder"
            filterable="true"
            clearable="true"
            :disabled="disabled"
            v-model="fieldValue"
            @change="emitFieldValueChangeEvent">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script>
    import { FormItem, Select, Option } from 'element-ui';

    export default {
        name: 'input-component',
        components: {
            'el-form-item': FormItem,
            'el-select': Select,
            'el-option': Option
        },
        model: {
            prop: 'fieldValue',
            event: 'change'
        },
        props: {
            name: String,
            label: String,
            placeholder: String,
            fieldValue: [String, Number],
            options: Array,

            /**
             * Rules
             */
            // Add a little start next to the label.
            required: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
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
