<template>
    <section>
        <div class="container">
            <h1>{{ post.title }}</h1>

            <h4>{{ post.category.name }}</h4>

            <figure>
                <img v-if="post.cover" :src="post.cover" />
            </figure>

            <p v-html="post.content"></p>

            <ul class="post__tags-list">
                <li class="post__tags" v-for="tag in post.tags" :key="tag.id">
                    {{ tag.name }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    props: ["slug"],
    data() {
        return {
            post: null,
        };
    },

    methods: {
        fetchPost() {
            axios
                .get(`/api/posts/${this.slug}`)
                .then((res) => {
                    const { post } = res.data;
                    this.post = post;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    created() {
        this.fetchPost();
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

.post__tags-list {
    display: flex;
    gap: 4px;
    .post__tags {
        padding: 0 8px;
        background-color: goldenrod;
        border-radius: 32px;
        cursor: pointer;
        font-size: 12px;
        color: white;
        transition: background-color 0.2s linear;

        &:hover {
            background-color: chocolate;
        }
    }
}

figure {
    width: 50%;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid goldenrod;

    img {
        width: 100%;
    }
}
</style>
