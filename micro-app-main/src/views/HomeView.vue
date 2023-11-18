<template>
  <el-container>
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue"
import Aside from "@/components/Aside.vue"
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.el-menu {
  height: 100vh;
  border-right: 0;
}
.el-main {
  padding: 0;
}
</style>
