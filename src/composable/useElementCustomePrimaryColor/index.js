import { reactive, toRefs } from 'vue'

const mix = (color1, color2, weight) => {
  weight = Math.max(Math.min(Number(weight), 1), 0)
  let r1 = parseInt(color1.substring(1, 3), 16)
  let g1 = parseInt(color1.substring(3, 5), 16)
  let b1 = parseInt(color1.substring(5, 7), 16)
  let r2 = parseInt(color2.substring(1, 3), 16)
  let g2 = parseInt(color2.substring(3, 5), 16)
  let b2 = parseInt(color2.substring(5, 7), 16)
  let r = Math.round(r1 * (1 - weight) + r2 * weight)
  let g = Math.round(g1 * (1 - weight) + g2 * weight)
  let b = Math.round(b1 * (1 - weight) + b2 * weight)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

export default function useElementCustomePrimaryColor() {
  // 变量前缀
  const pre = '--el-color-primary'
  // 白色混合色
  const mixWhite = '#ffffff'
  // 黑色混合色
  const mixBlack = '#000000'
  const state = reactive({
    color: localStorage.getItem('primaryColor') || '#409eff',
  })

  /**
   * @description: 更改主题
   * @param {String} color 颜色
   */
  const changeTheme = (color = state.color) => {
    const node = document.documentElement
    // 主色调
    node.style.setProperty(pre, color)
    localStorage.setItem('primaryColor', color)
    // 这里是覆盖原有颜色的核心代码
    for (let i = 1; i < 10; i += 1) {
      node.style.setProperty(`${pre}-light-${i}`, mix(color, mixWhite, i * 0.1))
    }
    node.style.setProperty('--el-color-primary-dark', mix(color, mixBlack, 0.1))
    // 本地缓存style，样式持久化，你也可以存在后端
    localStorage.setItem('style', node.style.cssText)
  }

  return {
    ...toRefs(state),
    changeTheme,
  }
}
