<template>
  <dl :class="$options.name">
    <dt :class="`${$options.name}__introduction`" v-text="introduction" />
    <dd>
      <form>
        <label>
          <input
            :class="[
              `${$options.name}__entry`,
              `${$options.name}__entryAction`,
            ]"
            type="text"
            :placeholder="input"
            :value="input"
          />
          <span v-text="label" />
        </label>
      </form>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'Input',

  props: {
    introduction: {
      type: String,
      default: '必要な値が',
      required: false,
    },

    input: {
      type: Number,
      default: 0,
      required: false,
    },

    label: {
      type: String,
      default: 'pxなら',
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
