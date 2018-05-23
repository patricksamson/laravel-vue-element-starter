<template>
    <el-form-item
        :label="label"
        label-position="right"
        :required="required">
        <el-switch
            :name="name"
            :active-text="activeText"
            :inactive-text="inactiveText"
            :disabled="disabled"
            v-model="fieldValue"
            @change="emitFieldValueChangeEvent">
        </el-switch>
    </el-form-item>
</template>

<script>
    import { FormItem, Switch } from 'element-ui';

    export default {
        name: 'input-component',
        components: {
            'el-form-item': FormItem,
            'el-switch': Switch
        },
        model: {
            prop: 'fieldValue',
            event: 'change'
        },
        props: {
            name: String,
            label: String,
            fieldValue: [Boolean, String, Number],
            activeText: String,
            inactiveText: String,

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
