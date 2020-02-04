<template>
  <div class="tags">
    <ul class="tags-current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="tags-new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/_variables.scss';
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: scroll;

  > .tags-current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    scrollbar-width: none;

    > li {
      $height: 24px;
      background: $bg-light;
      height: $height;
      line-height: $height;
      border-radius: $height/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 6px;
    }
  }

  > .tags-new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 4px;
    }
  }
}
</style>
