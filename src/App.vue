<template>
  <el-color-picker v-model="color" @change="handleChangeTheme" />

  <el-row class="mb-4" style="margin-top: 10px">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useElementCustomePrimaryColor from './composable/useElementCustomePrimaryColor/index'

const colorManager = useElementCustomePrimaryColor()

const color = ref(colorManager.color.value)

const handleChangeTheme = () => {
  colorManager.changeTheme(color.value)
}

// 导入默认样式
colorManager.changeTheme()
</script>
