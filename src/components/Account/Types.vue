<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'Types',
}
</script>

<style lang="scss" scoped>
.types {
  $bg: #c4c4c4;
  background: $bg;
  display: flex;
  font-size: 24px;

  li {
    $height: 64px;
    flex: 1;
    height: $height;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected {
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
}
</style>
