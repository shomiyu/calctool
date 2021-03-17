<template>
  <div class="mainContents">
    <div class="container">
      <div class="contentFlex">
        <!-- calcboard -->
        <article class="calcContents" data-target="">
          <h2 class="titlePrimary">px単位からem単位への変換</h2>
          <!-- fontSize -->
          <section class="calcSection">
            <h3 class="calcSection__title">font-sizeに使う</h3>
            <CalcBoard
              :calc-data="fontSizePxToEm"
              @onInput="handleChangeFontSizePxToEmVal"
            />
          </section>
          <!-- fontSize -->
          <section class="calcSection">
            <h3 class="calcSection__title">em / paddingに em を使う</h3>
            <CalcBoard
              :calc-data="otherPxToEm"
              @onInput="handleChangeOtherPxToEmVal"
            />
          </section>
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
      fontSizePxToEm: [
        {
          id: 0,
          type: 'arg',
          introduction: '親要素のfont-sizeが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '設定したいfont-sizeが',
          val: 18,
          defaultNum: 18,
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
      otherPxToEm: [
        {
          id: 0,
          type: 'arg',
          introduction: 'その要素のfont-sizeが',
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

  created() {
    // 初期値計算
    this.fontSizePxToEm[2].val =
      this.fontSizePxToEm[1].val / this.fontSizePxToEm[0].val

    this.otherPxToEm[2].val = this.otherPxToEm[1].val / this.otherPxToEm[0].val
  },

  methods: {
    handleChangeFontSizePxToEmVal(...args) {
      // 入力のあったデータを更新
      const [argNum, id] = args
      this.fontSizePxToEm[id].val = argNum

      // 再計算
      const firstNum = this.fontSizePxToEm[0].val
      const secondNum = this.fontSizePxToEm[1].val
      const answer = secondNum / firstNum

      // 小数点の調整
      this.fontSizePxToEm[2].val = Math.round(answer * 1000) / 1000
      return this.fontSizePxToEm[2].val
    },

    handleChangeOtherPxToEmVal(...args) {
      // 入力のあったデータを更新
      const [argNum, id] = args
      this.otherPxToEm[id].val = argNum

      // 再計算
      const firstNum = this.otherPxToEm[0].val
      const secondNum = this.otherPxToEm[1].val
      const answer = secondNum / firstNum

      // 小数点の調整
      this.otherPxToEm[2].val = Math.round(answer * 1000) / 1000
      return this.otherPxToEm[2].val
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

.calcSection {
  background-color: $color-lightYellow;
  border: 2px solid $color-gray;
  border-radius: 5px;
  padding: em(32) em(32) em(40);

  &__title {
    font-size: fz(20);
    margin-bottom: 1em;
  }
}

.sidebar {
  max-width: 312px;
  width: 100%;
}
</style>
