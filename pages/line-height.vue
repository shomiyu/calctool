<template>
  <article class="calcContents">
    <h1 class="titlePrimary" v-text="title" />
    <p class="info">
      <time datetime="2021-7-29">Update 2021.7.29</time>
      <span class="info__text"
        >デザインツールに合わせて文字サイズと行間の入力順を入れ替えました！</span
      >
    </p>

    <!-- pxから倍率 -->
    <section class="calcSection">
      <h2 class="calcSection__title">px から倍率に変換する</h2>
      <CalcBoard
        :calc-data="lineHeightPxToEm"
        @onInput="handleChangeVal($event, 'lineHeightPxToEm')"
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
              <h3>使い方</h3>
              <p>
                文字サイズと行間のpx値を入力するとline-heightを求めることができます。
              </p>
              <section>
                <h4>Photoshop</h4>
                <figure>
                  <img
                    src="~/assets/images/pages/img_usage_lineheight_photoshop.png"
                    alt="Photoshop"
                  />
                  <figcaption>文字サイズ15pxに対して24pxの行間</figcaption>
                </figure>
              </section>
              <section>
                <h4>Adobe XD</h4>
                <figure>
                  <img
                    src="~/assets/images/pages/img_usage_lineheight_xd.png"
                    alt="Adebe XD"
                  />
                  <figcaption>文字サイズ22pxに対して28pxの行間</figcaption>
                </figure>
              </section>
            </section>
            <section>
              <h3>line-heightの単位は何を使う？</h3>
              <section>
                <h4>文章でline-heightを使う</h4>
                <p>
                  line-heightは様々な場面で使いますが、文章等で使用する場合は単位なしの倍率で設定するのがおすすめです。
                </p>
                <p>
                  line-heightは子要素に設定が引き継がれる（継承する）プロパティなのですが、emや％などの単位で設定した場合と倍率値で設定した場合で子要素のline-heightの結果が変わるためです。
                </p>
                <p>
                  例えば現在の要素のfont-sizeが16pxで子要素のfont-sizeが24pxのとき、emや％でline-heightを設定するとその親要素の値が子要素に適用されますが、倍率で設定すると子要素のfont-sizeに合わせて適切に計算をしてくれるようになります。
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>要素(font-size)</th>
                      <th>line-height: 1.5</th>
                      <th>line-height: 1.5em</th>
                      <th>line-height: 150%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>親要素(16px)</th>
                      <td>24px</td>
                      <td>24px</td>
                      <td>24px</td>
                    </tr>
                    <tr>
                      <th>子要素(32px)</th>
                      <td>48px</td>
                      <td>24px</td>
                      <td>24px</td>
                    </tr>
                    <tr>
                      <th>孫要素(18px)</th>
                      <td>27px</td>
                      <td>24px</td>
                      <td>24px</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  bodyセレクタにline-height:
                  170%と設定してしまうと、h2やh3の見出し等で文字サイズよりline-heightが小さくなってしまい、都度line-heightを再設定しなければいけなくなってしまいますので注意しておきましょう。
                </p>
              </section>
            </section>
          </div>
        </transition>
      </div>
    </section>

    <!-- line-height間 -->
  </article>
</template>

<script>
export default {
  name: 'LineHeight',

  data() {
    return {
      title: 'line-height に使用する計算',
      isShowTip: false,
      lineHeightPxToEm: [
        {
          id: 0,
          type: 'arg',
          introduction: '文字サイズが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          introduction: '行間が',
          val: 28,
          defaultNum: 28,
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
    const fontSize = this.lineHeightPxToEm[0].val
    const lineHeight = this.lineHeightPxToEm[1].val
    const lineHeightPxToEmAnswer = lineHeight / fontSize
    this.lineHeightPxToEm[2].val =
      Math.round(lineHeightPxToEmAnswer * 1000) / 1000

    // サイドバー更新
    this.$store.commit('updateActiveSidebarMenu', 'lineheight')
  },

  mounted() {
    this.$adobeFonts(document)
    this.$nuxt.$emit('updateMenu', this.$options.name)
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
        const lineHeight = this.lineHeightPxToEm[1].val
        const fontSize = this.lineHeightPxToEm[0].val
        const answer = lineHeight / fontSize

        // 小数点の調整
        this.lineHeightPxToEm[2].val = Math.round(answer * 1000) / 1000
        return this.lineHeightPxToEm[2].val
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
          content: 'https://coding-calc.com/line-height',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.info {
  font-size: fz(14);
  width: 100%;
  margin-bottom: em(14, 14);
  position: relative;

  time {
    font-size: fz(11);
    display: inline-block;
    border: 1px solid;
    border-radius: 2px;
    padding: 0.25em 0.5em;
    margin-right: em(10, 11);
    margin-bottom: em(10, 11);
  }

  &__text {
    display: inline-block;
  }
}
</style>
