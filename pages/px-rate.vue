<template>
  <article class="calcContents">
    <h2 class="titlePrimary">固定値から割合に変換する計算</h2>

    <!-- pxから割合 -->
    <section class="calcSection">
      <h3 class="calcSection__title">px から %(vw) に変換する</h3>
      <CalcBoard
        :calc-data="pxToRate"
        @onInput="handleChangeVal($event, 'pxToRate')"
      />
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      pxToRate: [
        {
          id: 0,
          type: 'arg',
          introduction: '親要素の幅が',
          val: 375,
          defaultNum: 375,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '可変にしたい要素が',
          val: 320,
          defaultNum: 320,
          endLabel: 'pxなら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: '%(vw)',
        },
      ],
    }
  },

  created() {
    const pxToRateAnswer = this.pxToRate[1].val / this.pxToRate[0].val
    this.pxToRate[2].val = Math.round(pxToRateAnswer * 10000) / 100
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'pxToRate') {
        // 入力のあったデータを更新
        this.pxToRate[args.id].val = args.argNum

        // 再計算
        const firstNum = this.pxToRate[0].val
        const secondNum = this.pxToRate[1].val
        const answer = secondNum / firstNum

        // 小数点の調整
        this.pxToRate[2].val = Math.round(answer * 10000) / 100
        return this.pxToRate[2].val
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
