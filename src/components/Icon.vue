<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)

try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.error('使用importAll引入icons文件夹失败', error)
}

type TIconName = 'account' | 'labels' | 'statistics'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String as () => TIconName,
      required: true,
      validator(value) {
        return ['account', 'labels', 'statistics'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
