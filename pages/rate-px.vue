<template>
  <article class="calcContents">
    <h1 class="titlePrimary" v-text="title" />

    <!-- 割合からpx -->
    <section class="calcSection">
      <h2 class="calcSection__title">割合を元にpx値を求める</h2>
      <CalcBoard
        :calc-data="rateToPx"
        @onInput="handleChangeVal($event, 'rateToPx')"
      />
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      title: '割合から固定値に変換する計算',
      rateToPx: [
        {
          id: 0,
          type: 'arg',
          introduction: '幅が',
          val: 1440,
          defaultNum: 1440,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: 'そのうちの',
          val: 90,
          defaultNum: 90,
          endLabel: '%なら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: 'px',
        },
      ],
    }
  },

  created() {
    const rateToPxAnswer = (this.rateToPx[1].val / 100) * this.rateToPx[0].val
    this.rateToPx[2].val = Math.round(rateToPxAnswer * 10) / 10

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'rate-px')
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'rateToPx') {
        // 入力のあったデータを更新
        this.rateToPx[args.id].val = args.argNum

        // 再計算
        const rateNum = this.rateToPx[0].val
        const pxNum = this.rateToPx[1].val
        const answer = (rateNum / 100) * pxNum

        // 小数点の調整
        this.rateToPx[2].val = Math.round(answer * 10) / 10
        return this.rateToPx[2].val
      }
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://coding-calc.com/rate-px',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
