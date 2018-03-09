<template>
    <div>
        <el-input placeholder="input component"></el-input>
    </div>
</template>

<script>
    import { Input } from 'element-ui';

    export default {
        name: 'input-component',
        components: {
            'el-input': Input
        },
        mounted() {
            console.log('Input mounted.')
        }
    }
</script>
