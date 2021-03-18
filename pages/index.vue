<template>
  <article class="calcContents">
    <h1 class="titlePrimary">px単位からem単位への変換</h1>
    <!-- fontSize -->
    <section class="calcSection">
      <h2 class="calcSection__title">pxからemに変換する</h2>
      <CalcBoard
        :calc-data="pxToEm"
        @onInput="handleChangeVal($event, 'pxToEm')"
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
          @before-enter="$beforeEnter($event)"
          @enter="$enter($event)"
          @before-leave="$beforeLeave($event)"
          @leave="$leave($event)"
        >
          <div v-show="isShowTip" class="tips__contents slide">
            <section>
              <h3>em単位ってどうやって使う？</h3>
              <p>emはfont-sizeを基準に相対的に変化する単位です。</p>
              <p>
                ルートのfont-sizeを基準にするrem単位と違って、親要素のfont-sizeを基準に変化するのがemです。<br />そのため、要素のfont-sizeに合わせて可変するような余白関連に使用すると便利です。
              </p>
              <p>
                また、em単位を使用する要素にfont-sizeの指定がある場合は、親要素ではなくその要素のfont-sizeを基準にします。font-sizeは指定がなければ親要素から継承するので、その要素のfont-sizeを基準にすると考えても良いでしょう。
              </p>
              <p>
                例えば、見出し要素の下に40px相当の余白を入れたい場合、見出しのfont-sizeに対してem単位でmargin-bottomを設定すると、レスポンシブなどでfont-sizeを変えるだけで相対的に余白も変わるようになります。
              </p>
              <pre>
<code>h2 {
  font-size: 32px;
  margin-bottom: 1em; /* 32px * 1 = 32px */
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 24px;
    /* margin-bottom: 1em; が適用されており、 このとき24px * 1 = 24pxとなる */
  }
}</code>
              </pre>
              <section>
                <h4>例1 font-sizeプロパティにemを使用する場合</h4>
                <p>直近の親要素のfont-sizeを基準にします。</p>
                <figure>
                  <img
                    src="/images/img_usage_em_image.png"
                    alt="親要素のpタグの文字サイズが16pxのとき、文字サイズを12pxにしたいなら0.75emになる"
                  />
                  <figcaption>font-sizeにemを使う</figcaption>
                </figure>
              </section>
              <section>
                <h4>例2 font-size以外のプロパティにemを使用する場合</h4>
                <p>emを使用する要素のfont-sizeを基準にします。</p>
                <figure>
                  <img
                    src="/images/img_usage_em_margin.png"
                    alt="div要素の文字サイズが16pxのとき、margin-bottomに24pxほしいなら1.5emになる"
                  />
                  <figcaption>margin-bottomにemを使う</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/img_usage_em_padding.png"
                    alt="div要素の文字サイズが16pxのとき、paddingに40pxほしいなら2.5emになる"
                  />
                  <figcaption>paddingにemを使う</figcaption>
                </figure>
              </section>
            </section>
          </div>
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
      pxToEm: [
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
          introduction: 'ほしい値が',
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
    this.pxToEm[2].val = this.pxToEm[1].val / this.pxToEm[0].val

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'index')
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(args, type) {
      if (type === 'pxToEm') {
        // 入力のあったデータを更新
        this.pxToEm[args.id].val = args.argNum

        // 再計算
        const firstNum = this.pxToEm[0].val
        const secondNum = this.pxToEm[1].val
        const answer = secondNum / firstNum

        // 小数点の調整
        this.pxToEm[2].val = Math.round(answer * 1000) / 1000
        return this.pxToEm[2].val
      }
    },
  },
}
</script>
