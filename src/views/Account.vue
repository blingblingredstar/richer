<template>
  <Layout class-prefix="layout">
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

    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="请输入备注信息" />
      </label>
    </div>

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>

        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>

        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>

        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Account',
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
}
</style>

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

.notes {
  $bg: #f5f5f5;
  background: $bg;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }

  input {
    padding: 16px 16px 16px 0;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}

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

.numberPad {
  .output {
    font-size: 36px;
    font-family: 'Consolas', Courier, monospace;
    padding: 9px 16px;
    text-align: right;
    @extend %inner-shadow;
  }

  .buttons {
    @extend %clearfix;
    button {
      float: left;
      $height: 64px;
      width: 25%;
      height: $height;
      background: transparent;
      border: none;

      &.ok {
        height: $height * 2;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($color: $bg, $amount: 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($color: $bg, $amount: 4% * 2);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($color: $bg, $amount: 4% * 3);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($color: $bg, $amount: 4% * 4);
      }
      &:nth-child(14) {
        background: darken($color: $bg, $amount: 4% * 5);
      }
      &:nth-child(12) {
        background: darken($color: $bg, $amount: 4% * 6);
      }
    }
  }
}
</style>
