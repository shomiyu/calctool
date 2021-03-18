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
            type="number"
            number
            :placeholder="placeholder"
            :value="input"
            @input="$emit('onInput', $event.target.value)"
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

  model: {
    prop: 'input',
    event: 'updateInputNumber',
  },

  props: {
    introduction: {
      type: String,
      default: '必要な値が',
      required: false,
    },

    placeholder: {
      type: Number,
      default: 0,
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
    @include mq() {
      width: 70%;
    }
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

// スピンボタン削除
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
