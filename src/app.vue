<template>
    <div class="container">
        <hello></hello>

        <router-view></router-view>
    </div>
</template>

<script>
import hello from 'src/components/hello/hello.vue'

export default {
	components: {
		hello
	}
}
</script>

<style lang="scss">
html {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}
</style>
