<template>
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
</template>

<script lang="ts">
export default {
  name: 'NumberPad',
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/_variables.scss';
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
