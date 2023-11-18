<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-menu-item index="1">
      <el-icon><Setting /></el-icon>
      <span>主应用</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Location /></el-icon>
      <span>Vue2子应用</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Setting /></el-icon>
      <span>Vue3子应用</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location, Setting } from "@element-plus/icons-vue"
</script>
