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
      <span v-if="showCopyMessage" class="copyMessage">コピーしたよ😎</span>
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
          // エラー時コンソールに出力
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
  left: -10%;

  &::after {
    content: '';
    display: inline-block;
    border-top: 8px solid $color-black;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
