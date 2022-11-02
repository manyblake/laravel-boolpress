<template>
    <router-view></router-view>
</template>

<script>
import { RouterView } from "vue-router";

export default {
    components: {
        RouterView,
    },
};
</script>

<style lang="scss">
body {
    background-color: #fff8ed;
    margin: 50px 0;
    p,
    h3 {
        margin: 0;
        padding: 0;
    }
}
</style>

<style lang="scss" scoped></style>
