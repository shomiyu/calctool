<template>
  <article class="calcContents">
    <h1 class="titlePrimary" v-text="title" />
    <!-- 縦横比 -->
    <section class="calcSection">
      <h2 class="calcSection__title">要素間の余白を求める</h2>
      <!-- ひとつめの要素 -->
      <div class="groupContents groupContents--hasBorder">
        <div
          v-for="data in getFirstContentsGroup('firstContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Input
            :introduction="data.introduction"
            :input="data.defaultNum"
            :placeholder="data.defaultNum"
            :label="data.endLabel"
            @onInput="handleChangeVal($event, data.id)"
          />
        </div>
      </div>

      <!-- ふたつめの要素 -->
      <div class="groupContents groupContents--hasBorder">
        <div
          v-for="data in getFirstContentsGroup('secondContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Input
            :introduction="data.introduction"
            :input="data.defaultNum"
            :placeholder="data.defaultNum"
            :label="data.endLabel"
            @onInput="handleChangeVal($event, data.id)"
          />
        </div>
      </div>

      <!-- ほしい余白 -->
      <div class="groupContents">
        <Input
          v-for="data in getFirstContentsGroup('inputContents')"
          :key="data.id"
          :introduction="data.introduction"
          :input="data.defaultNum"
          :placeholder="data.defaultNum"
          :label="data.endLabel"
          @onInput="handleChangeVal($event, data.id)"
        />
      </div>

      <!-- 出力 -->
      <div class="groupContents">
        <div
          v-for="data in getFirstContentsGroup('answerContents')"
          :key="data.id"
          class="groupContents__field"
        >
          <Output
            :introduction="data.introduction"
            :output="Number(data.val)"
            :unit="data.unit"
          />
        </div>
      </div>

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
                line-heightが考慮されていないデザインデータで、line-heightを含んだ本来必要な要素間の余白を求め、em単位に変換します。
              </p>
              <p>
                下記のサンプルデータでは要素間に40pxの余白が空いていますが、単純に40pxの余白を与えるとブラウザ上で各要素のline-heightが計算され、40px以上の余白が空きます。
              </p>
              <figure class="wide">
                <img
                  src="~/assets/images/pages/img_usage_line_height_margin_xd_data.jpg"
                  alt=""
                />
                <figcaption>
                  2つの要素の間に40pxの余白が空いたAdobeXDのデザインサンプル
                </figcaption>
              </figure>
              <figure class="wide">
                <img
                  src="~/assets/images/pages/img_usage_marginLineheight_2.png"
                  alt="XDデータを文字で置き換えたイメージ"
                />
              </figure>
              <p>
                要素間の余白を求めるのでひとつめの要素(上の要素)とふたつめの要素(下の要素)のそれぞれの行間・文字サイズと、間のほしい値の5つのデータを扱います。
              </p>
              <figure class="small">
                <img
                  src="~/assets/images/pages/img_usage_marginLineheight_3.png"
                  alt="使用する値"
                />
              </figure>
              <p>
                ひとつめの要素に設定したい場合とふたつめの要素に設定したい場合でem値が異なるので、好きなほうをコピーしてお使いください。
              </p>
            </section>
            <section>
              <h3>サンプルデータを計算式に当てはめた結果</h3>
              <p>下記の計算式で本来使用するpx値を求めることができます。</p>
              <figure class="full">
                <img
                  src="~/assets/images/pages/img_usage_marginLineheight_math.png"
                  alt="計算式"
                />
              </figure>
              <p>
                この計算式からemに置き換えて設定すると以下のようになります。
              </p>
              <figure class="small">
                <img
                  src="~/assets/images/pages/img_usage_marginLineheight_output.png"
                  alt="ひとつめの要素を基準にしたとき"
                />
                <figcaption>
                  ひとつめの要素にmargin-bottomを設定すると0.917em
                </figcaption>
              </figure>
              <figure class="small">
                <img
                  src="~/assets/images/pages/img_usage_marginLineheight_output2.png"
                  alt="ふたつめの要素を基準にしたとき"
                />
                <figcaption>
                  ふたつめの要素にmargin-topを設定すると1.375em
                </figcaption>
              </figure>
            </section>
          </div>
        </transition>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'LineHeightMargin',

  data() {
    return {
      title: 'line-heightを含めた要素間の余白の計算',
      isShowTip: false,
      lineHeightMargin: [
        {
          id: 0,
          type: 'arg',
          group: 'firstContents',
          introduction: '要素の行間が',
          val: 48,
          defaultNum: 48,
          endLabel: 'pxで',
        },
        {
          id: 1,
          type: 'arg',
          group: 'firstContents',
          introduction: '要素のfont-sizeが',
          val: 24,
          defaultNum: 24,
          endLabel: 'pxで',
        },
        {
          id: 2,
          type: 'arg',
          group: 'secondContents',
          introduction: '要素の行間が',
          val: 28,
          defaultNum: 28,
          endLabel: 'pxで',
        },
        {
          id: 3,
          type: 'arg',
          group: 'secondContents',
          introduction: '要素のfont-sizeが',
          val: 16,
          defaultNum: 16,
          endLabel: 'pxで',
        },
        {
          id: 4,
          type: 'arg',
          group: 'inputContents',
          introduction: '必要な値が',
          val: 40,
          defaultNum: 40,
          endLabel: 'pxなら',
        },
        {
          id: 5,
          type: 'answer',
          group: 'answerContents',
          introduction: 'ひとつめの要素からの設定値は',
          val: Number,
          unit: 'em',
        },
        {
          id: 6,
          type: 'answer',
          group: 'answerContents',
          introduction: 'ふたつめの要素からの設定値は',
          val: Number,
          unit: 'em',
        },
      ],
    }
  },

  computed: {
    /**
     * リストレンダリング用のデータを取得する
     */
    getFirstContentsGroup() {
      return function (group) {
        return this.lineHeightMargin.filter((el) => el.group === group)
      }
    },
  },

  created() {
    // 初期計算
    const firstLineHeightPx = this.lineHeightMargin[0].val
    const firstFontSizePx = this.lineHeightMargin[1].val
    const secondLineHeightPx = this.lineHeightMargin[2].val
    const secondFontSizePx = this.lineHeightMargin[3].val
    const inputMargin = this.lineHeightMargin[4].val

    const firstAnser =
      (inputMargin -
        (firstLineHeightPx - firstFontSizePx) / 2 -
        (secondLineHeightPx - secondFontSizePx) / 2) /
      firstFontSizePx

    const secondAnser =
      (inputMargin -
        (firstLineHeightPx - firstFontSizePx) / 2 -
        (secondLineHeightPx - secondFontSizePx) / 2) /
      secondFontSizePx

    this.lineHeightMargin[5].val = Math.round(firstAnser * 1000) / 1000
    this.lineHeightMargin[6].val = Math.round(secondAnser * 1000) / 1000
  },

  mounted() {
    this.$adobeFonts(document)
    this.$nuxt.$emit('updateMenu', this.$options.name)
  },

  methods: {
    /**
     * 計算
     */
    handleChangeVal(arg, dataId) {
      // 入力のあったデータを更新
      this.lineHeightMargin[dataId].val = arg

      const firstLineHeightPx = this.lineHeightMargin[0].val
      const firstFontSizePx = this.lineHeightMargin[1].val
      const secondLineHeightPx = this.lineHeightMargin[2].val
      const secondFontSizePx = this.lineHeightMargin[3].val
      const inputMargin = this.lineHeightMargin[4].val

      const firstAnser =
        (inputMargin -
          (firstLineHeightPx - firstFontSizePx) / 2 -
          (secondLineHeightPx - secondFontSizePx) / 2) /
        firstFontSizePx

      const secondAnser =
        (inputMargin -
          (firstLineHeightPx - firstFontSizePx) / 2 -
          (secondLineHeightPx - secondFontSizePx) / 2) /
        secondFontSizePx

      this.lineHeightMargin[5].val = Math.round(firstAnser * 1000) / 1000
      this.lineHeightMargin[6].val = Math.round(secondAnser * 1000) / 1000
    },
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://coding-calc.com/line-height-margin',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.groupContents {
  display: flex;
  align-items: flex-start;
  @include mq() {
    flex-direction: column;
  }

  &--hasBorder {
    border: 1px solid $color-gray;
    border-radius: 5px;
    padding: em(24) em(40);
    @include mq(sm) {
      padding: em(24);
    }
  }

  &__field {
    width: calc(100% / 2);
    @include mq() {
      width: 100%;
    }
  }

  &__field + &__field {
    @include mq() {
      margin-top: 1.5em;
    }
  }

  & + & {
    margin-top: 2em;
  }
}
</style>
