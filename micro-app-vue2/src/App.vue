<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
</style>
