<template>
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">Menu Item</el-menu-item>
    </el-menu>
</template>

<script>
    import { Menu, MenuItem } from 'element-ui';

    export default {
        components: {
            'el-menu': Menu,
            'el-menu-item': MenuItem
        },
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
