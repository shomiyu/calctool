<template>
  <article class="calcContents">
    <h1 class="titlePrimary">固定値から割合に変換する計算</h1>

    <!-- pxから割合 -->
    <section class="calcSection">
      <h2 class="calcSection__title">px から %(vw) に変換する</h2>
      <CalcBoard
        :calc-data="pxToRate"
        @onInput="handleChangeVal($event, 'pxToRate')"
      />
      <div class="tips">
        <button
          type="button"
          :class="{ 'is-active': isShowTip }"
          class="tips__button"
          @click="isShowTip = !isShowTip"
        >
          TIPS
        </button>
        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <article v-show="isShowTip" class="tips__contents slide">
            <h3>%単位とvw単位</h3>
            <section>
              <h4>%単位</h4>
              <p>%単位は親要素の幅に対する割合で可変する単位です。</p>
              <p>
                モバイル端末のタブレットからスマートフォンまで、1枚のデザインカンプを様々なデバイスサイズで同じように見せるためには％単位などを駆使して幅や要素を可変させる必要があります。
              </p>
              <p>
                余談ですが、コンテンツ幅にwidthとmax-widthを組み合わせるとメディアクエリ(@media)を使わずにレスポンシブ対応が可能になります。次のサンプルは幅1199px以下になった場合に90%の幅で可変し続けるスタイル定義の例です。
              </p>
              <pre>
<code>.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}</code>
              </pre>
            </section>
            <section>
              <h4>vw単位</h4>
              <p>
                vwはviewport
                widthの略でビューポート（ウィンドウ）の幅に対する割合で可変する単位です。
              </p>
              <p>
                作者はファーストビューなどのビジュアル重視な部分で『要素や文字を画像のように見せたい』『どんなデバイスサイズでも画像のこの位置にこの文字を配置したい』という場合にvw単位をよく使用しています。
              </p>
              <p>
                以下の画像の例は作者の別のサイトですが、ファーストビューの要素の幅やpadding、font-size、marginにvwを多用していて、どのデバイスサイズでも同じように見せています。
              </p>
              <figure>
                <img src="/images/img-odogubako-vw.gif" alt="" />
              </figure>
            </section>
          </article>
        </transition>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isShowTip: false,
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

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'px-rate')
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

    /**
     * スライド開閉要素の高さ取得
     */
    beforeEnter(el) {
      el.style.height = '0'
    },

    enter(el) {
      this.contentHeight = el.scrollHeight
      el.style.height = el.scrollHeight + 'px'
    },

    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    leave(el) {
      this.contentHeight = el.scrollHeight
      el.style.height = '0'
    },
  },
}
</script>

<style lang="scss" scoped></style>
