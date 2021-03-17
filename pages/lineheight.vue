<template>
  <article class="calcContents">
    <h1 class="titlePrimary">line-height を使用する計算</h1>

    <!-- pxから倍率 -->
    <section class="calcSection">
      <h2 class="calcSection__title">px から倍率に変換する</h2>
      <CalcBoard
        :calc-data="lineHeightPxToEm"
        @onInput="handleChangeVal($event, 'lineHeightPxToEm')"
      />
    </section>

    <!-- line-height間 -->
  </article>
</template>

<script>
export default {
  data() {
    return {
      lineHeightPxToEm: [
        {
          id: 0,
          type: 'arg',
          introduction: 'デザインの行間が',
          val: 28,
          defaultNum: 28,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: 'デザインの文字サイズが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxなら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: '',
        },
      ],
    }
  },

  created() {
    const lineHeightPxToEmAnswer =
      this.lineHeightPxToEm[0].val / this.lineHeightPxToEm[1].val
    this.lineHeightPxToEm[2].val =
      Math.round(lineHeightPxToEmAnswer * 1000) / 1000
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'lineHeightPxToEm') {
        // 入力のあったデータを更新
        this.lineHeightPxToEm[args.id].val = args.argNum

        // 再計算
        const firstNum = this.lineHeightPxToEm[0].val
        const secondNum = this.lineHeightPxToEm[1].val
        const answer = firstNum / secondNum

        // 小数点の調整
        this.lineHeightPxToEm[2].val = Math.round(answer * 1000) / 1000
        return this.lineHeightPxToEm[2].val
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
