<template>
    <div class="container">
        <router-view></router-view>
        <!-- <ul class="card-list">
            <li v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
            </li>
        </ul> -->
    </div>
</template>

<script>
import { RouterView } from "vue-router";
import PostCard from "./components/PostCard.vue";

export default {
    data() {
        return {
            posts: [],
        };
    },

    components: {
        PostCard,
        RouterView,
    },

    methods: {
        fetchPost() {
            axios.get("/api/posts").then((res) => {
                const { posts } = res.data;
                this.posts = posts;
            });
        },
    },

    beforeMount() {
        this.fetchPost();
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

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

.card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
}

li {
    flex-basis: calc((100% - 128px) / 3);
}
</style>
