<template>
  <nav class="nav">
    <router-link to="/account" class="nav-item" active-class="selected">
      <Icon name="account" />记账
    </router-link>
    <router-link to="/labels" class="nav-item" active-class="selected">
      <Icon name="labels" />标签
    </router-link>
    <router-link to="/statistics" class="nav-item" active-class="selected">
      <Icon name="statistics" />统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/_variables.scss';
.nav {
  @extend %outer-shadow;
  display: flex;
  font-size: 12px;
  > .nav-item {
    padding: 2px 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .nav-item.selected {
    font-weight: bold;
    color: $color-selected;
  }
}
</style>
