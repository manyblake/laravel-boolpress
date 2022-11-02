<template>
    <div>
        <Nav />
        <router-view></router-view>
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";

export default {
    components: {
        RouterView,
        Nav,
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
