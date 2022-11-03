<template>
    <div class="container">
        <div class="card-list">
            <router-link
                class="card"
                :to="{ name: 'posts.show', params: { slug: post.slug } }"
                v-for="post in posts"
                :key="post.id"
            >
                <PostCard :post="post" />
            </router-link>
        </div>
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

.card {
    flex-basis: calc((100% - 128px) / 3);
    color: currentColor;
    text-decoration: none;
}
</style>
