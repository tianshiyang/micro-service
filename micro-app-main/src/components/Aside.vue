<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
  >
    <el-menu-item index="1" @click="goPath('/home')">
      <el-icon><Setting /></el-icon>
      <span>主应用</span>
    </el-menu-item>
    <el-menu-item index="2" @click="goPath('/micro-vue2')">
      <el-icon><Location /></el-icon>
      <span>Vue2子应用</span>
    </el-menu-item>
    <el-menu-item index="3" @click="goPath('/micro-vue3/home')">
      <el-icon><Setting /></el-icon>
      <span>Vue3子应用</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location, Setting } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"

const router = useRouter()

const goPath = (path: string) => {
  router.push({
    path
  })
}
</script>
