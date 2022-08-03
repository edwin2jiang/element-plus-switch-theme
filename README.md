# Element-plus vue3 切换主题样例

核心代码:
```
src\composable\useElementCustomePrimaryColor\index.ts
```

## 1. 如何使用

### 1.1 导入composable

将composable文件夹放在src目录下

![image-20220803220817303](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/2022/08/03/20220803-220819.png)

### 1.2 导入css样式

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入覆盖样式（必须在导入ElementPlus的css文件之后）
import './composable/useElementCustomePrimaryColor/style/style.scss'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

```



### 1.3 Hooks使用

```vue
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
```



### 1.4 完整样例（可忽略）

```vue
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
```





## 特别鸣谢

[掘金Cheer的文章](https://juejin.cn/post/7024025899813044232)
