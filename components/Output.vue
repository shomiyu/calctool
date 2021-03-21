<template>
  <dl :class="$options.name">
    <dt :class="`${$options.name}__introduction`" v-text="introduction" />
    <dd :class="`${$options.name}__contents`">
      <button
        type="button"
        title="値をコピー！"
        class="clickAble"
        @click="handleCopy(output)"
      >
        <strong :class="`${$options.name}__answer`" v-text="output" /><span
          v-if="unit !== ''"
          v-text="unit"
        />です！
      </button>
      <transition name="slideFade">
        <span v-if="showCopyMessage" class="copyMessage">コピーしたよ😎</span>
      </transition>
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

  data() {
    return {
      showCopyMessage: false,
    }
  },

  methods: {
    /**
     * クリップボードにコピーする
     */
    handleCopy(data) {
      this.$copyText(data).then(
        () => {
          this.showCopyMessage = true
          setTimeout(() => (this.showCopyMessage = false), 800)
        },
        (e) => {
          // eslint-disable-next-line
          console.log(e)
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.Output {
  &__introduction {
    margin-bottom: em(8);
  }

  &__contents {
    position: relative;
  }

  &__answer {
    font-size: fz(32);
    margin-right: em(4, 32);
  }
}

.clickAble {
  &:hover {
    opacity: 0.7;
    transition: 0.3s all ease-in-out;
  }
}

.copyMessage {
  font-size: fz(12);
  display: inline-block;
  background-color: $color-white;
  padding: em(4, 12) em(8, 12);
  border-radius: 5px;
  border: 1px solid $color-black;
  position: absolute;
  top: em(-30, 12);
  left: 0;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    border-top: 6px solid $color-white;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    z-index: 1;
  }

  &::after {
    border-top: 8px solid $color-black;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    z-index: 0;
  }
}
</style>
