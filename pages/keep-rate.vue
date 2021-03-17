<template>
  <article class="calcContents">
    <h1 class="titlePrimary">縦横比を保持したまま可変</h1>
    <!-- 縦横比 -->
    <section class="calcSection">
      <h2 class="calcSection__title">padding-top を求める</h2>
      <CalcBoard
        :calc-data="paddingTop"
        @onInput="handleChangeVal($event, 'paddingTop')"
      />
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      paddingTop: [
        {
          id: 0,
          type: 'arg',
          introduction: '要素/画像の幅が',
          val: 300,
          defaultNum: 300,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '要素/画像の高さが',
          val: 200,
          defaultNum: 200,
          endLabel: '%なら',
        },
        {
          id: 2,
          type: 'answer',
          introduction: '設定値は',
          val: Number,
          unit: '%',
        },
      ],
    }
  },

  created() {
    const paddingTopAnswer = this.paddingTop[1].val / this.paddingTop[0].val
    this.paddingTop[2].val = Math.round(paddingTopAnswer * 10000) / 100

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'keep-rate')
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'paddingTop') {
        // 入力のあったデータを更新
        this.paddingTop[args.id].val = args.argNum

        // 再計算
        const width = this.paddingTop[0].val
        const height = this.paddingTop[1].val
        const answer = height / width

        // 小数点の調整
        this.paddingTop[2].val = Math.round(answer * 10000) / 100
        return this.paddingTop[2].val
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
