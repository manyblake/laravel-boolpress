<template>
    <article>
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__date">{{ post.date }}</p>

        <div class="post__description">
            <figure v-if="post.cover">
                <img :src="post.cover" />
            </figure>
            <p>{{ post.category.name }}</p>

            <ul class="post__tags-list">
                <li class="post__tags" v-for="tag in post.tags" :key="tag.id">
                    {{ tag.name }}
                </li>
            </ul>
        </div>
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
    border: 1px solid goldenrod;
    min-height: 400px;
    border-radius: 8px;
    box-shadow: 4px 8px rgba(goldenrod, 0.6);

    .post__title {
        text-align: center;
        font-size: 20px;
        min-height: 80px;
    }

    .post__date {
        font-size: 12px;
    }

    .post__description {
        margin-top: auto;
        display: flex;
        align-items: center;
        flex-direction: column;

        figure {
            width: 125px;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid goldenrod;

            img {
                width: 100%;
            }
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
    }
}
</style>
