<template>
  <article class="calcContents">
    <h1 class="titlePrimary">px単位からem単位への変換</h1>
    <!-- fontSize -->
    <section class="calcSection">
      <h2 class="calcSection__title">font-size プロパティに em を使う</h2>
      <CalcBoard
        :calc-data="fontSizePxToEm"
        @onInput="handleChangeVal($event, 'fontSizePxToEm')"
      />
    </section>

    <!-- fontSize以外 -->
    <section class="calcSection">
      <h2 class="calcSection__title">font-size 以外のプロパティに em を使う</h2>
      <CalcBoard
        :calc-data="otherPxToEm"
        @onInput="handleChangeVal($event, 'otherPxToEm')"
      />
    </section>
  </article>
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
    this.fontSizePxToEm[2].val =
      this.fontSizePxToEm[1].val / this.fontSizePxToEm[0].val

    this.otherPxToEm[2].val = this.otherPxToEm[1].val / this.otherPxToEm[0].val
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'fontSizePxToEm') {
        // 入力のあったデータを更新
        this.fontSizePxToEm[args.id].val = args.argNum

        // 再計算
        const firstNum = this.fontSizePxToEm[0].val
        const secondNum = this.fontSizePxToEm[1].val
        const answer = secondNum / firstNum

        // 小数点の調整
        this.fontSizePxToEm[2].val = Math.round(answer * 1000) / 1000
        return this.fontSizePxToEm[2].val
      } else if (type === 'otherPxToEm') {
        // 入力のあったデータを更新
        this.otherPxToEm[args.id].val = args.argNum

        // 再計算
        const firstNum = this.otherPxToEm[0].val
        const secondNum = this.otherPxToEm[1].val
        const answer = secondNum / firstNum

        // 小数点の調整
        this.otherPxToEm[2].val = Math.round(answer * 1000) / 1000
        return this.otherPxToEm[2].val
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
