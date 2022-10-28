<template>
    <article>
        <h3 class="post__title">{{ post.title }}</h3>

        <figure>
            <img :src="post.cover" />
        </figure>

        <p class="post__date">{{ post.date }}</p>
    </article>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: {},
        },
    },
};
</script>

<style lang="scss" scoped>
article {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    border: 1px solid black;
    min-height: 350px;
    border-radius: 4px;
}

.post__title {
    text-align: center;
}

figure {
    width: 50%;
}

img {
    width: 100%;
}
.post__date {
    font-size: 12px;
}
</style>
