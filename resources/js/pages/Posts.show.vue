<template>
    <div></div>
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

<style lang="scss" scoped></style>
