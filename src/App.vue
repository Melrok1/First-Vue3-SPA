<template>
  <div id="app">
    <mainNav />
    <router-view />
  </div>
</template>

<script>
import mainNav from '@/components/MainNav.vue'

export default {
  name: 'App',
  components: {
    mainNav
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(240, 240, 240);

}
</style>