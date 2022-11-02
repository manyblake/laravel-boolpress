<template>
    <div>
        <section>
            <div class="container">
                <h1>{{ title }}</h1>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Contatti",
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}
</style>
