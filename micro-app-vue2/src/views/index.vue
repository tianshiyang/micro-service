<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Vue2子应用"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'index',
  components: {
    HelloWorld
  }
}
</script>