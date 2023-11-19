<template>
  <div class="about">
    <h1>micro 主应用</h1>
    <button @click="handleClick">按钮-pushState</button>
    <button @click="handleReplaceStateClick">按钮-replaceState</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClick = () => {
  router.push({
    path: "/micro-vue2"
  })
}

const handleReplaceStateClick = () => {
  router.replace({
    path: "/micro-vue3"
  })
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEE;
}
</style>
