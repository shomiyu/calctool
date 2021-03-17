<template>
  <div class="mainContents">
    <div class="container">
      <div class="contentFlex">
        <!-- calcboard -->
        <article class="calcContents" data-target="">
          <h2 class="titlePrimary">px単位からem単位への変換</h2>
          <!-- fontSize -->
          <section class="calcBoard">
            <h3 class="calcBoard__title">font-sizeに使う</h3>
            <div class="calcBoard__contents">
              <dl class="calcBoard__feild inputFeild">
                <dt class="inputFeild__introduction">現在のfont-sizeが</dt>
                <dd>
                  <form>
                    <label>
                      <input
                        v-model.number="emFontSize"
                        class="inputFeild__entry inputFeild__entryAction"
                        type="text"
                        :placeholder="emFontSize"
                      />
                      <span>pxで</span>
                    </label>
                  </form>
                </dd>
              </dl>
              <dl class="calcBoard__feild inputFeild">
                <dt class="inputFeild__introduction">必要な値が</dt>
                <dd>
                  <form>
                    <label>
                      <input
                        v-model.number="emChangeSize"
                        class="inputFeild__entry inputFeild__entryAction"
                        type="text"
                        :placeholder="emChangeSize"
                      />
                      <span>pxなら</span>
                    </label>
                  </form>
                </dd>
              </dl>
              <dl class="calcBoard__feild outputField">
                <dt class="outputField__introduction">設定値は</dt>
                <dd class="outputField__contents">
                  <button
                    type="button"
                    title="値をコピー！"
                    @click="handleCopy(changeEmAnswer, 'fontSizePxToEm')"
                  >
                    <strong
                      ref="fontSizePxToEm"
                      class="outputField__answer"
                      v-text="changeEmAnswer"
                    />emです！
                  </button>
                  <span v-if="copyMessage.fontSizePxToEm" class="copyMessage"
                    >コピーしたよ！</span
                  >
                </dd>
              </dl>
            </div>

            <CalcBoard
              :calc-data="fontSizePxToEm"
              @onInput="handleChangeFontSizePxToEmVal"
            />
          </section>
          <!-- /fontSize -->
        </article>
        <div class="sidebar">
          <button type="button">px → em</button>
          <button type="button">line-height</button>
          <button type="button">px → %/vw</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyMessage: {
        fontSizePxToEm: false,
      },
      emFontSize: 16,
      emChangeSize: 24,
      fontSizePxToEm: [
        {
          id: 0,
          type: 'arg',
          introduction: '現在のfont-sizeが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '必要な値が',
          val: 24,
          defaultNum: 24,
          endLabel: 'pxなら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: 'em',
        },
      ],
    }
  },

  computed: {
    changeEmAnswer() {
      const emAnswer = this.emChangeSize / this.emFontSize
      return Math.round(emAnswer * 1000) / 1000
    },
  },

  created() {
    this.fontSizePxToEm[2].val =
      this.fontSizePxToEm[1].val / this.fontSizePxToEm[0].val
  },

  methods: {
    handleChangeFontSizePxToEmVal(...args) {
      const [argNum, id] = args
      this.fontSizePxToEm[id].val = argNum

      const firstNum = this.fontSizePxToEm[0].val
      const secondNum = this.fontSizePxToEm[1].val
      this.fontSizePxToEm[2].val = secondNum / firstNum

      return Math.round(this.fontSizePxToEm[2].val * 1000) / 1000
    },

    /**
     * クリップボードにコピーする
     */
    handleCopy(output, key) {
      this.$copyText(output).then(
        () => {
          this.copyMessage[key] = true
          setTimeout(() => (this.copyMessage[key] = false), 500)
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
.mainContents {
  padding: em(40) 0 em(72);
}

.titlePrimary {
  font-size: fz(24);
  font-family: 'maru-maru-gothic-blr-stdn', sans-serif;
  color: $base-text-color;
  text-align: center;
  margin-bottom: em(32, 24);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.contentFlex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.calcContents {
  max-width: 816px;
  width: 100%;
}

.calcBoard {
  background-color: $color-lightYellow;
  border: 2px solid $color-gray;
  border-radius: 5px;
  padding: em(32) em(32) em(40);

  &__title {
    font-size: fz(20);
    margin-bottom: 1em;
  }

  &__contents {
    display: flex;
    align-items: flex-start;
  }

  &__feild {
    width: calc(100% / 3);
    max-width: 250px;
  }
}

.sidebar {
  max-width: 312px;
  width: 100%;
}

.inputFeild {
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

.outputField {
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

.copyMessage {
  font-size: fz(12);
  display: inline-block;
  background-color: $color-white;
  padding: em(4, 12) em(8, 12);
  border-radius: 5px;
  border: 1px solid $color-gray;
  position: absolute;
  top: em(-30, 12);
  left: -10%;

  &::after {
    content: '';
    display: inline-block;
    border-top: 8px solid $color-gray;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
