<template>
    <div class="container">
        <ul class="card-list">
            <li v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
            </li>
        </ul>
    </div>
</template>

<script>
import PostCard from "../views/components/PostCard.vue";
export default {
    data() {
        return {
            posts: [],
        };
    },

    components: {
        PostCard,
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
