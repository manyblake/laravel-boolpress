<template>
    <header class="container">
        <nav>
            <div>LOGO</div>
            <ul class="navbar__links">
                <li v-for="(link, i) in navLinks" :key="i">
                    <router-link class="navbar__link" :to="link.path">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navLinks: [
                { name: "Home", path: "/" },
                { name: "Chi Siamo", path: "/chi-siamo" },
                { name: "Contatti", path: "/contatti" },
                { name: "Blog", path: "/blog" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;

        .navbar__links {
            display: flex;
            align-items: center;
            gap: 8px;

            .navbar__link {
                text-decoration: none;
                color: currentColor;
            }
        }
    }
}
</style>
