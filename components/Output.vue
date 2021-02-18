<template>
  <dl :class="$options.name">
    <dt :class="`${$options.name}__introduction`" v-text="introduction" />
    <dd>
      <span v-text="output" /><span v-if="unit !== ''" v-text="unit" />です！
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'Output',

  props: {
    introduction: {
      type: String,
      default: '設定値は',
      required: false,
    },

    output: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      default: '',
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.Input {
  &__introduction {
    margin-bottom: em(8);
  }

  &__entry {
    font-size: fz(18);
    line-height: 2;
    width: 120px;
    height: 48px;
    background-color: $color-white;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding-left: em(16, 18);
    margin-right: em(16, 18);
  }

  &__entryAction {
    outline: 2px solid transparent;
    outline-offset: 100px;
    transition: all 0.2s ease;

    &:focus {
      outline: 2px solid $color-black;
      outline-offset: 0;
    }

    &:active {
      position: relative;
      top: 4px;
    }
  }
}
</style>
